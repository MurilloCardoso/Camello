// import { useState } from "react";

// export default function HomeLayout() {
//   const slides = [
//     "/images/slide1.jpg",
//     "/images/slide2.jpg",
//     "/images/slide3.jpg",
//   ];

//   const [current, setCurrent] = useState(0);

//   function prev() {
//     setCurrent(current === 0 ? slides.length - 1 : current - 1);
//   }

//   function next() {
//     setCurrent(current === slides.length - 1 ? 0 : current + 1);
//   }

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Header */}

//       {/* Slide */}
//       {/* <div className="relative w-full max-w-4xl mx-auto mt-6">
//         <img
//           src={slides[current]}
//           alt={`Slide ${current + 1}`}
//           className="w-full h-64 object-cover rounded-lg shadow-md"
//         />

//         <button
//           onClick={prev}
//           className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-90"
//           aria-label="Slide anterior"
//         >
//           ‹
//         </button>
//         <button
//           onClick={next}
//           className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-90"
//           aria-label="Próximo slide"
//         >
//           ›
//         </button>
//       </div> */}

//       {/* Grid principal */}
//       {/* <main className="flex-grow max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//         <section className="bg-gray-100 rounded p-4 shadow">
//           <h2 className="text-lg font-semibold mb-2">Destaque 1</h2>
//           <p>Conteúdo do destaque 1 aqui.</p>
//         </section>
//         <section className="bg-gray-100 rounded p-4 shadow">
//           <h2 className="text-lg font-semibold mb-2">Destaque 2</h2>
//           <p>Conteúdo do destaque 2 aqui.</p>
//         </section>
//         <section className="bg-gray-100 rounded p-4 shadow">
//           <h2 className="text-lg font-semibold mb-2">Destaque 3</h2>
//           <p>Conteúdo do destaque 3 aqui.</p>
//         </section>
//       </main> */}
//     </div>
//   );
// }
