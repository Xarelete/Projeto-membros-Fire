// IMPORTANT: This is a server-side route handler.
// It should be deployed as part of your Next.js application.

import { NextRequest, NextResponse } from 'next/server';

/**
 * Handles Hotmart's webhook notifications.
 *
 * This endpoint is designed to receive POST requests from Hotmart whenever
 * specific events occur (e.g., a purchase is approved). It verifies the
 * request's authenticity using a secret token (`hottok`) and then processes
 * the event data.
 *
 * @see https://developers.hotmart.com/docs/en/webhook/
 */
export async function POST(request: NextRequest) {
  console.log('Received a request on /api/hotmart-webhook');

  // 1. --- SECURITY CHECK ---
  // Verify that the request is genuinely from Hotmart.
  // The 'hottok' is a secret token you configure in your Hotmart account
  // and store securely in your application's environment variables.
  const hotmartToken = request.headers.get('hottok');

  if (hotmartToken !== process.env.HOTMART_WEBHOOK_SECRET) {
    console.warn('Invalid or missing Hotmart token.');
    // Return a 401 Unauthorized response if the token is invalid.
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  console.log('Hotmart token is valid.');

  // 2. --- PROCESS THE DATA ---
  // Parse the JSON payload from the request body.
  const payload = await request.json();
  const eventType = payload.event;

  console.log(`Processing event: ${eventType}`);

  // We are primarily interested in approved purchases to grant access.
  if (eventType === 'purchase.approved') {
    try {
      // Extract relevant data from the payload.
      const product = payload.data.product;
      const buyer = payload.data.buyer;
      const purchase = payload.data.purchase;

      const buyerEmail = buyer.email;
      const buyerName = buyer.name;
      const productID = product.id;
      const transactionId = purchase.transaction;

      console.log(`Purchase approved for product ${productID} by ${buyerEmail}`);

      // 3. --- DATABASE LOGIC (YOUR IMPLEMENTATION) ---
      // This is where you would interact with your database.
      //
      // EXAMPLE LOGIC:
      //
      // 1. Find a user in your database with `buyerEmail`.
      //    let user = await db.user.findUnique({ where: { email: buyerEmail } });
      //
      // 2. If the user doesn't exist, create a new one.
      //    if (!user) {
      //      user = await db.user.create({
      //        data: { name: buyerName, email: buyerEmail, password: "..." // (you'd need to implement a password reset flow) }
      //      });
      //    }
      //
      // 3. Map the Hotmart `productID` to your internal course ID.
      //    const courseId = mapHotmartIdToCourseId(productID);
      //
      // 4. Grant the user access to the course.
      //    await db.userCourseAccess.create({
      //      data: { userId: user.id, courseId: courseId, transaction: transactionId }
      //    });
      //
      // 5. (Optional) Send a welcome email to the user.
      //    await sendWelcomeEmail(buyerEmail);

      console.log(`Successfully processed access for ${buyerEmail}.`);

    } catch (error) {
      console.error('Error processing purchase.approved event:', error);
      return NextResponse.json({ message: 'Error processing webhook' }, { status: 500 });
    }
  } else {
    // You can choose to handle other events or just ignore them.
    console.log(`Ignoring event type: ${eventType}`);
  }

  // 4. --- RESPOND TO HOTMART ---
  // It's crucial to send a 200 OK response back to Hotmart to let them know
  // you've successfully received the webhook. Otherwise, they will keep retrying.
  return NextResponse.json({ message: 'Webhook received successfully' }, { status: 200 });
}
