function HotelSkeleton() {
  return (
    <div className="hotel-list">
      {[1, 2, 3].map((item) => (
        <div className="hotel-card skeleton-card" key={item}>
          <div className="skeleton-image"></div>

          <div className="hotel-info">
            <div className="skeleton-text"></div>
            <div className="skeleton-text small"></div>
            <div className="skeleton-text small"></div>
            <div className="skeleton-text price"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelSkeleton;