import React, { useState, useEffect } from "react";
import "./menu.css";



const MenuKaart = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const menuInfo = [
      { category: 'Cantonese Specialiteiten van onze chefs', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Sechuan Gerechten', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Soepen', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Voorgerechten', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Nasi Gerechten', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Nasi compleet Gerechten', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Bami Gerechten', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Bami compleet Gerechten', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Mihoen Gerechten', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Chinese Bami Gerechten', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Vegetarische Gerechten', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Eier Gerechten', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Groenten Gerechten', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Vlees Gerechten', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Kip Gerechten', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Garnalen Gerechten', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Rundvlees Gerechten', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Hollandse Gerechten', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Rijsttafels', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
      { category: 'Voordeel Menu', gerecht: 'Bij het bezorgen/afhalen kunt u pinnen en ook contant betalen' },
    ];
  
    const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    return (
      <div className="faq-container">
          <h1>Bestel lijst</h1>
        {menuInfo.map((item, index) => (
          <div key={index} className="faq-item">
            <h3 onClick={() => handleClick(index)} className="faq-question">{item.category}</h3>
            <p className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>{item.gerecht}</p>
          </div>
        ))}
            <a href=".pdf" className="pdf_link" name="Menukaart pdf" target="_blank">Menukaart pdf</a>
      </div>
    );
  };
  
  export default MenuKaart;




// const MenuKaart = () => {
//     const [activeAccordion, setActiveAccordion] = useState(null);

//     const handleClick = (index) => {
//         if (activeAccordion === index) {
//             setActiveAccordion(null);
//         } else {
//             setActiveAccordion(index);
//         }
//     };

    // useEffect(() => {
    //     const acc = document.querySelectorAll(".accordion");

    //     acc.forEach((accordion, index) => {
    //         accordion.addEventListener("click", () => handleClick(index));
    //     });

    //     return () => {
    //         acc.forEach((accordion, index) => {
    //             accordion.removeEventListener("click", () => handleClick(index));
    //         });
    //     };
    // }, [activeAccordion]);

    // return (
        // <div className="Menu-container">
        //     <h1 id="title_menu_page">Bestel lijst</h1>
        //     <div id="main_div">
        //         <div id="persoonsmenu">
        //             <h3 id="nieuw"> Eén persoonsmenu</h3>
        //             <p className="text">
        //                 Alleen eten hoeft niet saai te zijn!
        //                 Geniet nu van heerlijke éénpersoonsmenu's van À Yik.
        //                 Uw menu bestaat uit witte rijst, nasi of bami, een saté en de keuze uit één van onderstaande gerechten:
        //             </p>
        //             <div className="eennpersoonsmenu">
        //                     <p className="text">1: Babi Pangang</p>
        //                    <p className="text">2: Foe Yong Hai</p> 
        //                    <p className="text"> 3: Koe Lo Kai</p>
        //                    <p className="text"> 4: Kip Kerrie</p>
        //                    <p className="text">5: Tjap Tjoy</p>
        //                    <p className="text">Voor maar € 7,50</p>
        //                    <p className="text">Waar wacht u nog op, bestel snel!</p>
        //             </div>
        //         </div>
        //         <div id="groepsmenu">
        //             <h3 id="nieuw">NIEUW !</h3>
        //             <p className="text">
        //                 U kunt ook bij ons chaffing dishes lenen, als u boven de 15 personen bestelt. 
        //                 Het is namelijk veel handiger dan plastic bakken en het staat veel mooier, wanneer u bv.
        //                 Een feest geeft. Als u bestelt, willen we het voortijdig weten, zodat wij ons erop kunnen voorbereiden.
        //             </p>
        //             <br />
        //             <h4 className="text">Beverwijk - Heemskerk - Velsen Noord
        //                     (bezorgdienst van 17.00 - 20.00 uur) Maandag en Dinsdag zijn wij gesloten!
        //             </h4>
        //         </div>
        //     </div>
        //     <div id="menus">
        //         <h3 id="nieuw">(Klik op een van de menu's hieronder om ze te openen)</h3>
        //         <button 
        //             className={`accordion ${activeAccordion === 0 ? 'active' : ''}`}
        //         >
        //            <h3>Cantonese Specialiteiten van onze chefs</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 0 ? '1000px' : '0px' }}>
        //             <p>
        //             C3.TAU SIE KAI --- € 15,50<br/>
        //             (Gesneden kip met zwarte bonen in kruidige sojo saus)<br/>
        //             C4.NG HEUNG CHAP KAM LAP --- € 15,50<br/>
        //             (vijf hemelse smaken met groente en kipvlees)<br/>
        //             C5.TAU SIE YUK --- € 15,50<br/>
        //             (gesneden varkensvlees met zwarte bonen inkruidige sojo saus)<br/>
        //             C6.KING DO YUK --- € 16,00<br/>
        //             (gefrituurd varkensvlees met ananas en paprika in zoetzure saus)<br/>
        //             C6a.KING DO KAI --- € 16,00<br/>
        //             (gefrituurde kipfilet met ananas en paprika in zoetzure saus)<br/>
        //             C7.CHA SIU --- € 17,00<br/>
        //             (geroosterd varkensvlees)<br/>
        //             C8.NG HEUNG NGO YUK LAP --- € 17,00<br/>
        //             (rundvlees met vijf hemelse smaken en groente)<br/>
        //             C9.TAU SIE NGO YUK --- € 17,00<br/>
        //             (gesneden rundvlees met zwarte bonen in kruidige sojo saus)<br/>
        //             C10.TJI LO CHAU NGO YUK --- € 17,00<br/>
        //             (rundvlees met gember,ananas en peper in zoetzure saus)<br/>
        //             C11.PAT CHUN TAU FOE PO --- € 17,00<br/>
        //             (taufoe met kip, cha siu, varkensvlees, chin. garnalen in oosterse saus)<br/>
        //             C16.NG HEUNG CHAP KAM HA --- € 21,00<br/>
        //             (chinese garnalen met vijf hemelse smaken en groente)<br/>
        //             C17.PEKING EEND --- € 17,50<br/>
        //             (geroosterde eend in pikante saus)<br/>
        //             C18.TONG KOE AP --- € 18,50<br/>
        //             (geroosterse eend met chinese champignons)
        //             </p>
        //         </div>
        //         <button 
        //             className={`accordion ${activeAccordion === 1 ? 'active' : ''}`}
        //         >
        //            <h3>Sechuan Gerechten</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 1 ? '1000px' : '0px' }}>
        //             <p>
        //                  S1.KUNG PO HA --- € 21,00<br/>
        //                 (chinese garnalen in kung po saus)<br/>
        //                 S2. KUNG PO KAI --- € 16,00<br/>
        //                 (gesneden kip in kung po saus)<br/>
        //                 S3.KUNG PO YUK --- € 16,00<br/>
        //                 (gesneden varkensvlees in kung po saus)<br/>
        //                 S4. KUNG PO NGO YUK --- € 18,00<br/>
        //                 (gesneden rundvlees in kung po saus)<br/>
        //                 S5.SECHUAN HA --- € 21,00<br/>
        //                 (chinese garnalen in sechuan saus)<br/>
        //                 S6.SECHUAN KAI --- € 16,00<br/>
        //                 (gesneden kip in sechuan saus)<br/>
        //                 S7.SECHUAN YUK --- € 16,00<br/>
        //                 (gesneden varkensvlees in sechuan saus)<br/>
        //                 S8.SECHUAN NGO YUK --- € 18,00<br/>
        //                 (gesneden rundvlees in sechuan saus)<br/>
        //                 S9.CHEUNG PAW HA --- € 21,00<br/>
        //                 (chinese garnalen in cheung paw saus)<br/>
        //                 S10.CHEUNG PAW KAI --- € 16,00<br/>
        //                 (gesneden kip in cheung paw saus)<br/>
        //                 S11.CHEUNG PAW YUK --- € 16,00<br/>
        //                 (Gesneden varkensflees in cheung paw saus)<br/>
        //                 S12.CHEUNG PAW NGO YUK --- € 18,00<br/>
        //                 (gesneden rundvlees in cheung paw saus)<br/>
        //                 S13.MA PA TAU FOE --- € 16,00<br/>
        //                 (taufoe met fijn gesneden rundvlees, groente en jonge mais in chilibonensaus)
        //             </p>
        //         </div>

        //         <button 
        //             className={`accordion ${activeAccordion === 2 ? 'active' : ''}`}
        //         >
        //            <h3>Soepen</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 2 ? '1000px' : '0px' }}>
        //             <p>
        //             1.Kippensoep --- € 3,50<br/>
        //             2.Tomatensoep --- € 3,50<br/>
        //             3.Haaienvinnensoep --- € 3,50<br/>
        //             4.Champignonsoep --- € 3,50<br/>
        //             5.Kerriesoep --- € 3,50<br/>
        //             6.Aspergesoep --- € 3,50<br/>
        //             7.Bamboesoep --- € 3,50<br/>
        //             8.Chinese groentesoep --- € 3,50<br/>
        //             9.Hete Pekingsoep --- € 6,50<br/>
        //             10.Wan Tan soep --- € 6,50
        //             </p>
        //         </div>

        //         <button 
        //             className={`accordion ${activeAccordion === 3 ? 'active' : ''}`}
        //         >
        //            <h3>Voorgerechten</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 3 ? '1000px' : '0px' }}>
        //             <p>
        //             11.Chinese mini loempia per portie (2 stuks) --- € 4,50<br/>
        //             12.Loempia speciaal --- € 4,30<br/>
        //             13.Loempia speciaal extra --- € 7,00<br/>
        //             14.Pangsit Goreng ( 8 stuks)--- € 6,50<br/>
        //             15.Kroepoek --- € 3,50<br/>
        //             15HK.Hete kroepoek --- € 3,50<br/>
        //             16.Pisang Goreng -(gebakken bananen 4 stuks)-- € 4,00<br/>
        //             18.Saté Ajam (4 stokjes) --- € 7,20<br/>
        //             19.Saté Babi (4 stokjes) --- € 7,20<br/>
        //             20.Saté garnalen (4 stokjes) --- € 10,00<br/>
        //             21.Atjar --- € 2,80<br/>
        //             22.Saté saus, Babi Pangangsaus, tomatensaus of kerriesaus --- € 3,00<br/>
        //             23.Witte rijst per portie --- € 3,00<br/>
        //             24.Patat Frites --- € 3,00<br/>
        //             25.Gado Gado --- € 6,00<br/>
        //             26.Kippenpootje --- € 3,00
        //             </p>
        //         </div>
        //         <button 
        //             className={`accordion ${activeAccordion === 4 ? 'active' : ''}`}
        //         >
        //            <h3>Nasi Gerechten</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 4 ? '1000px' : '0px' }}>
        //             <p>
        //             28. Nasi Goreng met vlees, ei en ham --- € 7,00<br/>
        //             28G. Nasi Goreng met vlees, ei en ham (met extra groenten) --- € 8,00<br/>
        //             29. Nasi Goreng speciaal (met 1 stokje saté en ¼ kip)--- € 11,00<br/>
        //             30. Nasi Goreng met 3 stokjes saté --- € 11,00<br/>
        //             31. Nasi Goreng met gesneden kip en groenten --- € 11,50<br/>
        //             32. Nasi Goreng met gesneden varkensvlees en groenten --- € 11,50<br/>
        //             33. Nasi Goreng met gesneden rundvlees en groenten --- € 13,50<br/>
        //             34. Nasi Goreng met chinese garnalen en groenten --- € 17,00<br/>
        //             35. Nasi Goreng “ SINGAPORE ” --- € 13,50<br/>
        //             (cha siu, garnalen, groenten en kerrie)<br/>
        //             36. Nasi Goreng “ YANG CHOW “ --- € 13,50<br/>
        //             (cha siu, garnalen, groenten)<br/>
        //             37. Nasi Goreng compleet “ À YIK “ --- € 15,00<br/>
        //             (met koe loe yuk, babi pangang, tjap tjoi en 1 stokje saté)<br/>
        //             38. Nasi Goreng met Babi Pangang (bedekt) --- € 11,50<br/>
        //             39. So Ya Fang --- € 13,50<br/>
        //             (nasi met ¼ kip, 1 stokje saté en babi pangang)
        //             </p>
        //         </div>
        //         <button 
        //             className={`accordion ${activeAccordion === 5 ? 'active' : ''}`}
        //         >
        //            <h3>Nasi compleet Gerechten</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 5 ? '1000px' : '0px' }}>
        //             <p>
        //             40. For Fu Fan --- € 14,50<br/>
        //             (nasi goreng met babi pangang, foe yong hai en 1 stokje saté)<br/>
        //             41. For Tjap Fan --- € 14,50<br/>
        //             (nasi goreng met babi pangang, tjap tjoi en 1 stokje saté)<br/>
        //             42. For Koe Fan --- € 14,50<br/>
        //             (nasi goreng met babi pangang, koe loe yuk en 1 stokje saté)<br/>
        //             43. For Lee Kai Fan --- € 14,50<br/>
        //             (nasi goreng met babi pangang, kip kerrie en 1 stokje saté)<br/>
        //             44. Koe Fu Fan --- € 14,50<br/>
        //             (nasi goreng met koe loe yuk, foe yong hai en 1 stokje saté)<br/>
        //             45. Fu Tjap Fan --- € 14,50<br/>
        //             (nasi goreng met foe yong hai, tjap tjoi en 1 stokje saté)<br/>
        //             46. Koe Tjap Fan --- € 14,50<br/>
        //             (nasi goreng met koe loe yuk, tjap tjoi en 1 stokje saté)
        //             </p>
        //         </div>

        //         <button 
        //             className={`accordion ${activeAccordion === 6 ? 'active' : ''}`}
        //         >
        //            <h3>Bami Gerechten</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 6 ? '1000px' : '0px' }}>
        //             <p>
        //             49G.Bami Goreng met vlees, ei en ham met extra groenten --- € 8,00<br/>
        //             49. Bami Goreng met vlees, ei en ham ---- € 7,00<br/>
        //             50. Bami Goreng speciaal --- € 11,00<br/>
        //             (met 1 stokje saté en ¼ kip)<br/>
        //             51. Bami Goreng met 3 stokjes saté --- € 11,00<br/>
        //             52. Bami Goreng met gesneden kip en groenten --- € 11,50<br/>
        //             53. Bami Goreng met gesneden varkensvlees en groenten --- € 11,50<br/>
        //             54. Bami Goreng met gesneden rundvlees en groenten --- € 13,50<br/>
        //             55. Bami Goreng met Chinese garnalen en groenten --- € 17,00<br/>
        //             56. Bami Goreng met Babi Pangang (bedekt) --- € 11,50<br/>
        //             57. So Ya Mie --- € 13,50<br/>
        //             (bami met ¼ kip, 1 stokje saté en babi pangang)<br/>
        //             58. Bami Goreng compleet “ A Yik “ --- € 15,00<br/>
        //             (met koe lo yuk, babi pangang, tjap tjoi en 1 stokje saté)
        //             </p>
        //         </div>

        //         <button 
        //             className={`accordion ${activeAccordion === 7 ? 'active' : ''}`}
        //         >
        //            <h3>Bami compleet Gerechten</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 7 ? '1000px' : '0px' }}>
        //             <p>
        //             59. For Fu Mien --- € 14,50<br/>
        //             (bami goreng met babi pangang, foe yong hai en 1 stokje saté)<br/>
        //             60. For Tjap Mien --- € 14,50<br/>
        //             (bami goreng met babi pangang, tjap tjoi en 1 stokje saté)<br/>
        //             61. For Koe Mien --- € 14,50<br/>
        //             (bami goreng met babi pangang, koe loe yuk en 1 stokje saté)<br/>
        //             62. For Lee Kai Mien --- € 14,50<br/>
        //             (bami goreng met babi pangang, kip kerrie en 1 stokje saté)<br/>
        //             63. Koe Fu Mien --- € 14,50<br/>
        //             (bami goreng met koe loe yuk, foe yong hai en 1 stokje saté)<br/>
        //             64. Fu Tjap Mien --- € 14,50<br/>
        //             (bami goreng met foe yong hai, tjap tjoi en 1 stokje saté)<br/>
        //             65. Koe Tjap Mien --- € 14,50<br/>
        //             (bami goreng met koe loe yuk, tjap tjoi en 1 stokje saté)
        //             </p>
        //         </div>

        //         <button 
        //             className={`accordion ${activeAccordion === 8 ? 'active' : ''}`}
        //         >
        //            <h3>Mihoen Gerechten</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 8 ? '1000px' : '0px' }}>
        //             <p>
        //             66. Miehoen Goreng met varkensvlees en groenten --- € 13,00<br/>
        //             67. Miehoen Goreng met gesneden kip en groenten --- € 13,00<br/>
        //             68. Miehoen met gesneden rundvlees en groenten --- € 14,00<br/>
        //             69. Miehoen met Chinese garnalen en groenten --- € 16,50<br/>
        //             70. Miehoen “ SINGAPORE “ --- € 13,50<br/>
        //             (met cha siu, garnalen, groenten en kerrie)<br/>
        //             70Z.Miehoen “ YANG CHOW “ --- € 13,50<br/>
        //             (met cha siu, garnalen en groenten)<br/>
        //             71. Miehoen Goreng compleet “ À YIK “ --- € 16,50<br/>
        //             (met koe loe yuk, babi pangang, tjap tjoi en 1 stokje saté)
        //             </p>
        //         </div>

        //         <button 
        //             className={`accordion ${activeAccordion === 9 ? 'active' : ''}`}
        //         >
        //            <h3>Chinese Bami Gerechten</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 9 ? '1000px' : '0px' }}>
        //             <p>
        //                 72. Chin. Bami Goreng met varkensvlees en groenten --- € 13,00<br/>
        //                 73. Chin. Bami Goreng met gesneden kip en groenten --- € 13,00<br/>
        //                 74. Chin. Bami Goreng met gesneden rundvlees en groenten --- € 14,00<br/>
        //                 75. Chin. Bami met Chinese garnalen en groenten --- € 16,50<br/>
        //                 76. Chin. Bami “ SINGAPORE “ --- € 13,50<br/>
        //                 (met cha siu, garnalen, groenten en kerrie)<br/>
        //                 76Z. Chin. Bami Goreng “ YANG CHOW “ --- € 13,50<br/>
        //                 ( met cha siu, garnalen en groenten)<br/>
        //                 77. Chin. Bami Goreng compleet “ À YIK “ --- € 16,50<br/>
        //                 (met koe loe yuk, babi pangang, tjap tjoi en 1 stokje saté)
        //             </p>
        //         </div>

        //         <button 
        //             className={`accordion ${activeAccordion === 10 ? 'active' : ''}`}
        //         >
        //            <h3>Vegetarische Gerechten</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 10 ? '1000px' : '0px' }}>
        //             <p>
        //                 12V. Vegetarische loempia speciaal --- € 4,30<br/>
        //                 13V. Vegetarische loempia speciaal extra --- € 7,00<br/>
        //                 78. Pat Po Chai --- € 13,50<br/>
        //                 (chinese vegetarische schotel)<br/>
        //                 79. Ng Heung Chap Kam Chai --- € 13,50<br/>
        //                 (div. groenten in ng heung saus)<br/>
        //                 80. Ka Lee Chap Kam Chai --- € 13,50<br/>
        //                 (div. groenten in kerrie saus)<br/>
        //                 81. Chai Foe Yong --- € 11,50<br/>
        //                 (foe yong hai zonder vlees)<br/>
        //                 82. Chai Tjap Tjoi --- € 11,50<br/>
        //                 (tjap tjoi zonder vlees)<br/>
        //                 82A.Mihoen vegetarische --- € 11,50<br/>
        //                 (mihoen met div. groenten)<br/>
        //                 82B.Chin. Bami vegetarische --- € 11,50<br/>
        //                 (chin. bami met div. groenten)
        //             </p>
        //         </div>

                
        //         <button 
        //             className={`accordion ${activeAccordion === 11 ? 'active' : ''}`}
        //         >
        //            <h3>Eier Gerechten</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 11 ? '1000px' : '0px' }}>
        //             <p>
        //                 83. Foe Yong Hai met varkensvlees --- € 12,50<br/>
        //                 84. Foe Yong Hai met gesneden kip --- € 12,50<br/>
        //                 85. Foe Yong Hai met Chinese garnalen --- € 17,50<br/>
        //                 86. Foe Yong Hai met rundvlees --- € 14,50<br/>
        //                 87. Foe Yong Hai “ À YIK “ --- € 15,50<br/>
        //                 (met gesneden kip, cha siu en garnalen)<br/>
        //                 87B.Foe Yong Hai Cha Siu --- € 14,00
        //             </p>
        //         </div>

        //         <button 
        //             className={`accordion ${activeAccordion === 12 ? 'active' : ''}`}
        //         >
        //            <h3>Groenten Gerechten</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 12 ? '1000px' : '0px' }}>
        //             <p>
        //                 88. Tjap Tjoy met varkensvlees --- € 12,50<br/>
        //                 89. Tjap Tjoy met gesneden kip --- € 12,50<br/>
        //                 90. Tjap Tjoy met rundvlees --- € 14,50<br/>
        //                 91. Tjap Tjoy met Chinese garnalen --- € 17,50<br/>
        //                 92. Tjap Tjoy met Cha Siu --- € 14,00<br/>
        //                 93. Tjap Tjoy kerrie met varkensvlees en gesneden kip --- € 13,50<br/>
        //                 94. Tjap Tjoy “ À YIK “ --- € 15,50
        //             </p>
        //         </div>

        //         <button 
        //             className={`accordion ${activeAccordion === 13 ? 'active' : ''}`}
        //         >
        //            <h3>Vlees Gerechten</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 13 ? '1000px' : '0px' }}>
        //             <p>
        //                 95. Babi Pangang spek --- € 16,50<br/>
        //                 96. Babi Pangang in balisaus(spek --- € 16,50<br/>
        //                 97. Babi Pangang speciaal --- € 15,00<br/>
        //                 (mager vlees in pikante saus)<br/>
        //                 97K. Babi Pangang in ketjapsaus --- € 15,50<br/>
        //                 98. Babi Pangang speciaal --- € 15,50<br/>
        //                 (mager vlees in kerriesaus)<br/>
        //                 99. Babi Pangang speciaal --- € 15,50<br/>
        //                 (mager vlees met champignons in balisaus)<br/>
        //                 100. Babi Pangang speciaal --- € 15,50<br/>
        //                 (mager vlees met ananas in pikante saus)<br/>
        //                 101. Babi Pangang “ À YIK ” --- € 16,50<br/>
        //                 (mager vlees, spek en cha siu)<br/>
        //                 102. Ajam Pangang --- € 15,50<br/>
        //                 (kip in pikante saus)<br/>
        //                 104. Koe Loe Yuk --- € 14,50<br/>
        //                 (Balletjes varkenshaas in zoetzure saus)<br/>
        //                 105. Varkensvlees in kerriesaus --- € 14,50<br/>
        //                 106. Varkensvlees in tomatensaus --- € 14,50<br/>
        //                 107. Varkensvlees met champignons --- € 14,50<br/>
        //                 108. Varkensvlees met paprika --- € 14,50<br/>
        //                 109. Varkensvlees met taugé --- € 14,50<br/>
        //                 110. Varkensvlees met bamboe --- € 14,50<br/>
        //                 111. Varkensvlees met asperges --- € 14,50<br/>
        //                 112. Babi Ketjap --- € 15,00<br/>
        //                 (Varkensvlees met ketjapsaus)

        //             </p>
        //         </div>

        //         <button 
        //             className={`accordion ${activeAccordion === 14 ? 'active' : ''}`}
        //         >
        //            <h3>Kip Gerechten</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 14 ? '1000px' : '0px' }}>
        //             <p>
        //                 112A. Ajam Ketjap --- € 15,00<br/>
        //                 (kipfilet in ketjapsaus)<br/>
        //                 113. ½ kip in pikante saus --- € 14,50<br/>
        //                 114. ½ kip in kerriesaus --- € 14,50<br/>
        //                 115. ½ kip met tomaten --- € 14,50<br/>
        //                 116. ½ kip met champignons --- € 14,50<br/>
        //                 117. ½ kip in balisaus --- € 14,50<br/>
        //                 118. Kipblokjes in kerriesaus --- € 14,40<br/>
        //                 119. Kipblokjes in pikante saus --- € 14,50<br/>
        //                 120. Kipblokjes met tomaten --- € 14,50<br/>
        //                 121. Kipblokjes met champignons --- € 14,50<br/>
        //                 122. Kipblokjes met paprika --- € 14,50<br/>
        //                 123. Kipblokjes met asperges --- € 14,50<br/>
        //                 124. Kipblokjes met bamboe --- € 14,50<br/>
        //                 125. Kipblokjes met ananas in zoetzure saus --- € 14,50<br/>
        //                 128. Koe Lo Kai --- € 14,50<br/>
        //                 (kipballetjes in zoetzure saus)<br/>
        //                 129. Kipblokjes met taugé --- € 14,50
        //             </p>
        //         </div>

        //         <button 
        //             className={`accordion ${activeAccordion === 15 ? 'active' : ''}`}
        //         >
        //            <h3>Garnalen Gerechten</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 15 ? '1000px' : '0px' }}>
        //             <p>
        //                 130. Koe Lo Ha --- € 20,50<br/>
        //                 (garnalen in zoetzure saus)<br/>
        //                 131. Gebakken Chinese garnalen in pikante saus --- € 20,50<br/>
        //                 132. Chinese garnalen met champignons --- € 20,00<br/>
        //                 133. Chinese garnalen in kerriesaus --- € 20,00<br/>
        //                 134. Chinese garnalen met tomaten --- € 20,00<br/>
        //                 135. Chinese garnalen met bamboe --- € 20,00<br/>
        //                 136. Chinese garnalen met asperges --- € 20,00
        //             </p>
        //         </div>

        //         <button 
        //             className={`accordion ${activeAccordion === 16 ? 'active' : ''}`}
        //         >
        //            <h3>Rundvlees Gerechten</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 16 ? '1000px' : '0px' }}>
        //             <p>
        //                 112B. rundvlees in ketjapsaus --- € 16,50<br/>
        //                 137. rundvlees in kerriesaus --- € 15,50<br/>
        //                 138. rundvlees met paprika --- € 15,50<br/>
        //                 139. rundvlees met champignons --- € 15,50<br/>
        //                 140. rundvlees met taugé --- € 15,50<br/>
        //                 141. rundvlees in pikante saus --- € 15,50<br/>
        //                 142. rundvlees in zoetzure saus met ananas en paprika --- € 15,50

        //             </p>
        //         </div>

        //         <button 
        //             className={`accordion ${activeAccordion === 17 ? 'active' : ''}`}
        //         >
        //            <h3>Hollandse Gerechten</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 17 ? '1000px' : '0px' }}>
        //             <p>
        //                 143. ½ kip met frites en appelmoes --- € 12,50<br/>
        //                 146. Kindermenu met ¼ kip, frites en appelmoes --- € 7,50<br/>
        //                 146a. Kindermenu met saté, frites en appelmoes --- € 7,50<br/>
        //                 147. Kindermenu met frikandel, frites en appelmoes --- € 7,50
        //             </p>
        //         </div>

        //         <button 
        //             className={`accordion ${activeAccordion === 18 ? 'active' : ''}`}
        //         >
        //            <h3>Rijsttafels</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 18 ? '1000px' : '0px' }}>
        //             <p>
        //                 R1. RIJSTTAFEL HAPPYWORLD --- € 43,50<br/>
        //                 voor 2 personen (Mini Loempia, Pangsit Goreng, NG Heung Chap Kam Ha, Cha Siu, Tau Sie Kai, Kroepoek en witte rijst)<br/>
        //                 <br/>
        //                 R2. RIJSTTAFEL HAPPY FAMILY --- € 72,00<br/>
        //                 voor 4 personen (Mini Loempia, Pangsit Goreng, Kung Po Kai, Ng Heung Chap Kam Ha, Sechuan Ngo Yuk, Koe Lo Yuk, Babi Pangang, Kroepoek en witte rijst)<br/>
        //                 <br/>
        //                 R3. CHINESE RIJSTTAFEL --- € 18,50<br/>
        //                 voor 1 persoon (Kroepoek, Babi Pangang, Koe Lo Yuk, Kipfilet met champignons, Foe Yong Hai en 1 stokje saté en witte rijst)<br/>
        //                 <br/>
        //                 R4. CHINESE RIJSTTAFEL --- € 36,00<br/>
        //                 voor 2 personen (Kroepoek, Babi Pangang, Foe Yong Hai, Koe Lo Yuk, Tjap Tjoy met kip, gebakken garnalen en 2 stokjes saté en witte rijst)<br/>
        //                 <br/>
        //                 R5. CHINESE RIJSTTAFEL --- € 77,00<br/>
        //                 voor 4 personen (Kroepoek, Babi Pangang, Cha Siu, Koe Lo Yuk, Foe Yong Hai, Tjap Tjoy met kip, Peking eend met champignons, witte rijst en gebakken garnalen)
        //             </p>
        //         </div>

        //         <button 
        //             className={`accordion ${activeAccordion === 19 ? 'active' : ''}`}
        //         >
        //            <h3>Voordeel Menu</h3> 
        //         </button>
        //         <div className="panel" style={{ maxHeight: activeAccordion === 19 ? '1000px' : '0px' }}>
        //             <p>
        //                 Menu A --- € 22,00<br/>
        //                 voor 2 personen<br/>
        //                 (Kerrie Hoekjes en Pangsit Goreng met keuze uit 2 gerechten van het onderstaand menu) (* met 2 maal nasi, bami of witte rijst)<br/>

        //                 Menu B --- € 31,00<br/>
        //                 voor 3 personen<br/>
        //                 (Kerrie Hoekjes en Pangsit Goreng met keuze uit 3 gerechten van het onderstaand menu) (* met 3 maal nasi, bami of witte rijst)<br/>

        //                 1. Babi Pangang<br/>
        //                 2. Foe Yong Hai met kip of varkensvlees<br/>
        //                 3. Tjap Tjoy met kip of varkensvlees<br/>
        //                 4. Kip of varkensvlees met kerriesaus<br/>
        //                 5. Kip of varkensvlees met champignons<br/>
        //                 6. Koe Loe Kai (kipballetjes in zoetzure saus)<br/>
        //                 7. Tau Sie Kai (kip met zwarte bonensaus in kruidige sojo saus)<br/>
        //                 8. Ng Heung Chap Kam Lap (kip met vijf hemelse smaken)<br/>
        //                 9. Kung Po Kai of Kung Po Yuk ( kip of varkensvlees met kung po saus)

        //             </p>
        //         </div>
        //     </div>
        // </div>
//     );
// }

// export default MenuKaart;
