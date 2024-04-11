import React from "react";

export default function About() {

    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
           
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="Logo Promise"
                src="../Promise.png" style={{ width: '80%', height: '80%' }}
              />
               <p className="mb-8 leading-relaxed">
                is introducing you his portfolio
              </p>
            </div>
          </div>
        </section>
      );
}