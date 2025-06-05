import React, { useState, useEffect } from "react";
import "./DanceGallery.css";
import BackButton from "../../../components/BackButton"; 

const DanceGallery = () => {
  const [activeTab, setActiveTab] = useState("zdjęcia");

  const [images, setImages] = useState([]);
  const [youtubeVideos, setYoutubeVideos] = useState([
    "https://www.youtube.com/watch?v=oCEkZUoIdL0",
    
  ]);
  const [localVideos, setLocalVideos] = useState([]);

  const [loadingImages, setLoadingImages] = useState(true);
  const [loadingVideos, setLoadingVideos] = useState(true);

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  // Ładowanie zdjęć
  useEffect(() => {
    const loadImages = async () => {
      const imagesContext = import.meta.glob(
        "../../../assets/images/*.{jpg,jpeg,png,svg}"
      );
      const imagePaths = Object.keys(imagesContext);
      const loadedImages = await Promise.all(
        imagePaths.map(async (path) => {
          const image = await imagesContext[path]();
          return image.default;
        })
      );
      setImages(loadedImages);
      setLoadingImages(false); // Zakończono ładowanie zdjęć
    };

    loadImages();
  }, []);

  // Ładowanie lokalnych filmów 
  useEffect(() => {
    const loadLocalVideos = async () => {
      const videosContext = import.meta.glob(
        "../../../assets/videos/*.{mp4,webm,ogg}"
      );
      const videoPaths = Object.keys(videosContext);
      const loadedVideos = await Promise.all(
        videoPaths.map(async (path) => {
          const video = await videosContext[path]();
          return video.default;
        })
      );
      setLocalVideos(loadedVideos);
      setLoadingVideos(false); // Zakończono ładowanie filmów
    };

    loadLocalVideos();
  }, []);

  // Obsługa modalu
  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => {
      const next = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      setSelectedImage(images[next]);
      return next;
    });
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => {
      const prev = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      setSelectedImage(images[prev]);
      return prev;
    });
  };

  const getYouTubeEmbedLink = (url) => {
    try {
      const videoId = new URLSearchParams(new URL(url).search).get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    } catch (e) {
      return "";
    }
  };

  return (
    <div>
      <BackButton />

      <h1>GALERIA TANECZNA</h1>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "zdjęcia" ? "active" : ""}`}
          onClick={() => setActiveTab("zdjęcia")}
        >
          Zdjęcia
        </button>
        <button
          className={`tab ${activeTab === "filmy" ? "active" : ""}`}
          onClick={() => setActiveTab("filmy")}
        >
          Filmy
        </button>
      </div>

      {activeTab === "zdjęcia" && (
        <div className="picture">
          {loadingImages ? (
            <div className="loading-spinner">Ładowanie...</div> // Spinner, jeśli zdjęcia się ładują
          ) : (
            images.map((src, index) => (
              <div
                key={index}
                className="picture-item"
                onClick={() => openModal(index)}
              >
                <img
                  src={src}
                  alt={`Taniec ${index + 1}`}
                  className="picture-img"
                />
              </div>
            ))
          )}
        </div>
      )}

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="nav-button prev" onClick={prevImage}>
              &#10094;
            </button>
            <img src={selectedImage} alt="Wybrane" className="modal-img" />
            <button className="nav-button next" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>
      )}

      {activeTab === "filmy" && (
        <div className="video-gallery">
          {loadingVideos ? (
            <div className="loading-spinner">Ładowanie...</div> // Spinner, jeśli filmy się ładują
          ) : (
            <>
              {youtubeVideos.map((url, index) => (
                <div key={`yt-${index}`} className="video-item">
                  <iframe
                    src={getYouTubeEmbedLink(url)}
                    title={`YouTube Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
              {localVideos.map((src, index) => (
                <div key={`local-${index}`} className="video-item">
                  <video controls>
                    <source src={src} type="video/mp4" />
                    Twoja przeglądarka nie obsługuje odtwarzacza wideo.
                  </video>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DanceGallery;
