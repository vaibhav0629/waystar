import { results } from "@/lib/results";

export default function ResultsCarousel() {
  return (
    <div id="resultsCarousel" className="carousel slide results-carousel mx-auto">
      <div className="carousel-indicators">
        {results.map((r, i) => (
          <button
            key={r.id}
            type="button"
            data-bs-target="#resultsCarousel"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-current={i === 0 ? "true" : undefined}
            aria-label={`Report card ${i + 1}`}
          />
        ))}
      </div>
      
      <div className="carousel-inner">
        {results.map((r, i) => (
            <div key={r.id} className={`carousel-item ${i === 0 ? "active" : ""}`}>
            <a href={r.image} target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.image} alt={`Report card`} loading="lazy" />
            </a>
            </div>
          ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#resultsCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#resultsCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}