import React, { useEffect, useState } from "react";

const Intro = () => {
  const [sayac, setSayac] = useState(0);

  console.log("Sayaç değeri: ", sayac);
  function arttir() {
    setSayac(sayac + 1);
  }

  function azalt() {
    setSayac(sayac - 1);
  }
  function sifirla() {
    setSayac(0);
  }
  useEffect(() => {
    console.log("Sayfa render edildi.");
  }, []);

  useEffect(() => {
    console.log("Sayaç değeri güncellendi.");
  }, [sayac]);

  return (
    <div>
      <h2>Sayaç Değeri: {sayac}</h2>
      <button className="btn" onClick={arttir}>
        Arttır +
      </button>
      <button className="btn" onClick={azalt}>
        Azalt -
      </button>
      <button className="btn" onClick={sifirla}>
        Sıfırla 0
      </button>
    </div>
  );
};

export default Intro;
