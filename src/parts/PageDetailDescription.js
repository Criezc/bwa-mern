import React from "react";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      {/* {ReactHtmlParser(data.description)} */}
      <p>
        Minimal techno is a minimalist subgenre of techno music. It
        ischaracterized by a stripped-down aesthetic that exploits the use
        ofrepetition and understated development. Minimal techno is thought
        tohave been originally developed in the early 1990s by
        Detroit-basedproducers Robert Hood and Daniel Bell.
      </p>
      <p>
        Such trends saw the demise of the soul-infused techno that typified
        theoriginal Detroit sound. Robert Hood has noted that he and Daniel
        Bellboth realized something was missing from techno in the post-rave
        era.
      </p>
      <p>
        Design is a plan or specification for the construction of an object
        orsystem or for the implementation of an activity or process, or
        theresult of that plan or specification in the form of a prototype,
        productor process. The national agency for design: enabling Singapore to
        usedesign for economic growth and to make lives better.
      </p>
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((feature, index) => {
          return (
            <div
              key={`feature-${index}`}
              className="col-3"
              style={{ marginBottom: 20 }}
            >
              <img
                src={feature.imageUrl}
                alt={feature.name}
                width="38"
                className="d-block mb-2"
              />{" "}
              <span>{feature.qty}</span>{" "}
              <span className="text-gray-500 font-weight-light">
                {feature.name}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
