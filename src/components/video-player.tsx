type VideoPlayerProps = {
  videoId: string;
  title: string;
};

export function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  // Add autoplay=1 to the YouTube embed URL to make the video play automatically
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&si=somerandomstring`;

  return (
    <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black relative">
      <iframe
        src={videoSrc}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}
