import React, { useState, useEffect } from "react";
import "./menu.css";



const MenuKaart = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const menuInfo = [
        { category: 'Cantonese Specialiteiten van onze chefs', gerecht: [   
            'C3.TAU SIE KAI --- € 15,50',
            'C4.NG HEUNG CHAP KAM LAP --- € 15,50',
            'C5.TAU SIE YUK --- € 15,50',
            'C6.KING DO YUK --- € 16,00',
            'C6a.KING DO KAI --- € 16,00',
            'C7.CHA SIU --- € 17,00',
            'C8.NG HEUNG NGO YUK LAP --- € 17,00',
            'C9.TAU SIE NGO YUK --- € 17,00',
            'C10.TJI LO CHAU NGO YUK --- € 17,00',
            'C11.PAT CHUN TAU FOE PO --- € 17,00',
            'C16.NG HEUNG CHAP KAM HA --- € 21,00',
            'C17.PEKING EEND --- € 17,50',
            'C18.TONG KOE AP --- € 18,50']},
        { category: 'Sechuan Gerechten', gerecht: [
            'S1.KUNG PO HA --- € 21,00 (Chinese garnalen in kung po saus)',
            'S2.KUNG PO KAI --- € 16,00 (Gesneden kip in kung po saus)',
            'S3.KUNG PO YUK --- € 16,00 (Gesneden varkensvlees in kung po saus)',
            'S4.KUNG PO NGO YUK --- € 18,00 (Gesneden rundvlees in kung po saus)',
            'S5.SECHUAN HA --- € 21,00 (Chinese garnalen in sechuan saus)',
            'S6.SECHUAN KAI --- € 16,00 (Gesneden kip in sechuan saus)',
            'S7.SECHUAN YUK --- € 16,00 (Gesneden varkensvlees in sechuan saus)',
            'S8.SECHUAN NGO YUK --- € 18,00 (Gesneden rundvlees in sechuan saus)',
            'S9.CHEUNG PAW HA --- € 21,00 (Chinese garnalen in cheung paw saus)',
            'S10.CHEUNG PAW KAI --- € 16,00 (Gesneden kip in cheung paw saus)',
            'S11.CHEUNG PAW YUK --- € 16,00 (Gesneden varkensvlees in cheung paw saus)',
            'S12.CHEUNG PAW NGO YUK --- € 18,00 (Gesneden rundvlees in cheung paw saus)',
            'S13.MA PA TAU FOE --- € 16,00 (Taufoe met fijn gesneden rundvlees, groente en jonge mais in chilibonensaus)']},
        { category: 'Soepen', gerecht: [
            '1.Kippensoep --- € 3,50',
            '2.Tomatensoep --- € 3,50',
            '3.Haaienvinnensoep --- € 3,50',
            '4.Champignonsoep --- € 3,50',
            '5.Kerriesoep --- € 3,50',
            '6.Aspergesoep --- € 3,50',
            '7.Bamboesoep --- € 3,50',
            '8.Chinese groentesoep --- € 3,50',
            '9.Hete Pekingsoep --- € 6,50',
            '10.Wan Tan soep --- € 6,50'
          ]},
        { category: 'Voorgerechten', gerecht: [
            '11.Chinese mini loempia per portie (2 stuks) --- € 4,50',
            '12.Loempia speciaal --- € 4,30',
            '13.Loempia speciaal extra --- € 7,00',
            '14.Pangsit Goreng (8 stuks) --- € 6,50',
            '15.Kroepoek --- € 3,50',
            '15HK.Hete kroepoek --- € 3,50',
            '16.Pisang Goreng (gebakken bananen 4 stuks) --- € 4,00',
            '18.Saté Ajam (4 stokjes) --- € 7,20',
            '19.Saté Babi (4 stokjes) --- € 7,20',
            '20.Saté garnalen (4 stokjes) --- € 10,00',
            '21.Atjar --- € 2,80',
            '22.Saté saus, Babi Pangangsaus, tomatensaus of kerriesaus --- € 3,00',
            '23.Witte rijst per portie --- € 3,00',
            '24.Patat Frites --- € 3,00',
            '25.Gado Gado --- € 6,00',
            '26.Kippenpootje --- € 3,00'
          ]},
        { category: 'Nasi Gerechten', gerecht: [
            '28. Nasi Goreng met vlees, ei en ham --- € 7,00',
            '28G. Nasi Goreng met vlees, ei en ham (met extra groenten) --- € 8,00',
            '29. Nasi Goreng speciaal (met 1 stokje saté en ¼ kip) --- € 11,00',
            '30. Nasi Goreng met 3 stokjes saté --- € 11,00',
            '31. Nasi Goreng met gesneden kip en groenten --- € 11,50',
            '32. Nasi Goreng met gesneden varkensvlees en groenten --- € 11,50',
            '33. Nasi Goreng met gesneden rundvlees en groenten --- € 13,50',
            '34. Nasi Goreng met chinese garnalen en groenten --- € 17,00',
            '35. Nasi Goreng “ SINGAPORE ” --- € 13,50 (cha siu, garnalen, groenten en kerrie)',
            '36. Nasi Goreng “ YANG CHOW “ --- € 13,50 (cha siu, garnalen, groenten)',
            '37. Nasi Goreng compleet “ À YIK “ --- € 15,00 (met koe loe yuk, babi pangang, tjap tjoi en 1 stokje saté)',
            '38. Nasi Goreng met Babi Pangang (bedekt) --- € 11,50',
            '39. So Ya Fang --- € 13,50 (nasi met ¼ kip, 1 stokje saté en babi pangang)'
          ]},
        { category: 'Nasi compleet Gerechten', gerecht: [
            '40. For Fu Fan --- € 14,50 (nasi goreng met babi pangang, foe yong hai en 1 stokje saté)',
            '41. For Tjap Fan --- € 14,50 (nasi goreng met babi pangang, tjap tjoi en 1 stokje saté)',
            '42. For Koe Fan --- € 14,50 (nasi goreng met babi pangang, koe loe yuk en 1 stokje saté)',
            '43. For Lee Kai Fan --- € 14,50 (nasi goreng met babi pangang, kip kerrie en 1 stokje saté)',
            '44. Koe Fu Fan --- € 14,50 (nasi goreng met koe loe yuk, foe yong hai en 1 stokje saté)',
            '45. Fu Tjap Fan --- € 14,50 (nasi goreng met foe yong hai, tjap tjoi en 1 stokje saté)',
            '46. Koe Tjap Fan --- € 14,50 (nasi goreng met koe loe yuk, tjap tjoi en 1 stokje saté)'
          ]},
        { category: 'Bami Gerechten', gerecht: [
            '49G. Bami Goreng met vlees, ei en ham met extra groenten --- € 8,00',
            '49. Bami Goreng met vlees, ei en ham --- € 7,00',
            '50. Bami Goreng speciaal (met 1 stokje saté en ¼ kip) --- € 11,00',
            '51. Bami Goreng met 3 stokjes saté --- € 11,00',
            '52. Bami Goreng met gesneden kip en groenten --- € 11,50',
            '53. Bami Goreng met gesneden varkensvlees en groenten --- € 11,50',
            '54. Bami Goreng met gesneden rundvlees en groenten --- € 13,50',
            '55. Bami Goreng met Chinese garnalen en groenten --- € 17,00',
            '56. Bami Goreng met Babi Pangang (bedekt) --- € 11,50',
            '57. So Ya Mie (bami met ¼ kip, 1 stokje saté en babi pangang) --- € 13,50',
            '58. Bami Goreng compleet “ A Yik “ (met koe lo yuk, babi pangang, tjap tjoi en 1 stokje saté) --- € 15,00'
          ]},
        { category: 'Bami compleet Gerechten', gerecht: [
            '59. For Fu Mien (bami goreng met babi pangang, foe yong hai en 1 stokje saté) --- € 14,50',
            '60. For Tjap Mien (bami goreng met babi pangang, tjap tjoi en 1 stokje saté) --- € 14,50',
            '61. For Koe Mien (bami goreng met babi pangang, koe loe yuk en 1 stokje saté) --- € 14,50',
            '62. For Lee Kai Mien (bami goreng met babi pangang, kip kerrie en 1 stokje saté) --- € 14,50',
            '63. Koe Fu Mien (bami goreng met koe loe yuk, foe yong hai en 1 stokje saté) --- € 14,50',
            '64. Fu Tjap Mien (bami goreng met foe yong hai, tjap tjoi en 1 stokje saté) --- € 14,50',
            '65. Koe Tjap Mien (bami goreng met koe loe yuk, tjap tjoi en 1 stokje saté) --- € 14,50'
          ]},
        { category: 'Mihoen Gerechten', gerecht: [
            '66. Miehoen Goreng met varkensvlees en groenten --- € 13,00',
            '67. Miehoen Goreng met gesneden kip en groenten --- € 13,00',
            '68. Miehoen met gesneden rundvlees en groenten --- € 14,00',
            '69. Miehoen met Chinese garnalen en groenten --- € 16,50',
            '70. Miehoen “ SINGAPORE “ (met cha siu, garnalen, groenten en kerrie) --- € 13,50',
            '70Z. Miehoen “ YANG CHOW “ (met cha siu, garnalen en groenten) --- € 13,50',
            '71. Miehoen Goreng compleet “ À YIK “ (met koe loe yuk, babi pangang, tjap tjoi en 1 stokje saté) --- € 16,50'
          ]},
        { category: 'Chinese Bami Gerechten', gerecht: [
            '72. Chin. Bami Goreng met varkensvlees en groenten --- € 13,00',
            '73. Chin. Bami Goreng met gesneden kip en groenten --- € 13,00',
            '74. Chin. Bami Goreng met gesneden rundvlees en groenten --- € 14,00',
            '75. Chin. Bami met Chinese garnalen en groenten --- € 16,50',
            '76. Chin. Bami “ SINGAPORE “ (met cha siu, garnalen, groenten en kerrie) --- € 13,50',
            '76Z. Chin. Bami Goreng “ YANG CHOW “ (met cha siu, garnalen en groenten) --- € 13,50',
            '77. Chin. Bami Goreng compleet “ À YIK “ (met koe loe yuk, babi pangang, tjap tjoi en 1 stokje saté) --- € 16,50'
          ]},
        { category: 'Vegetarische Gerechten', gerecht: [
            '12V. Vegetarische loempia speciaal --- € 4,30',
            '13V. Vegetarische loempia speciaal extra --- € 7,00',
            '78. Pat Po Chai (chinese vegetarische schotel) --- € 13,50',
            '79. Ng Heung Chap Kam Chai (div. groenten in ng heung saus) --- € 13,50',
            '80. Ka Lee Chap Kam Chai (div. groenten in kerrie saus) --- € 13,50',
            '81. Chai Foe Yong (foe yong hai zonder vlees) --- € 11,50',
            '82. Chai Tjap Tjoi (tjap tjoi zonder vlees) --- € 11,50',
            '82A. Mihoen vegetarische (mihoen met div. groenten) --- € 11,50',
            '82B. Chin. Bami vegetarische (chin. bami met div. groenten) --- € 11,50'
          ]},
        { category: 'Eier Gerechten', gerecht: [
            '83. Foe Yong Hai met varkensvlees --- € 12,50',
            '84. Foe Yong Hai met gesneden kip --- € 12,50',
            '85. Foe Yong Hai met Chinese garnalen --- € 17,50',
            '86. Foe Yong Hai met rundvlees --- € 14,50',
            '87. Foe Yong Hai “ À YIK “ (met gesneden kip, cha siu en garnalen) --- € 15,50',
            '87B. Foe Yong Hai Cha Siu --- € 14,00'
          ]},
        { category: 'Groenten Gerechten', gerecht: [
            '88. Tjap Tjoy met varkensvlees --- € 12,50',
            '89. Tjap Tjoy met gesneden kip --- € 12,50',
            '90. Tjap Tjoy met rundvlees --- € 14,50',
            '91. Tjap Tjoy met Chinese garnalen --- € 17,50',
            '92. Tjap Tjoy met Cha Siu --- € 14,00',
            '93. Tjap Tjoy kerrie met varkensvlees en gesneden kip --- € 13,50',
            '94. Tjap Tjoy “ À YIK “ --- € 15,50'
          ]},
        { category: 'Vlees Gerechten', gerecht: [
            '95. Babi Pangang spek --- € 16,50',
            '96. Babi Pangang in balisaus(spek) --- € 16,50',
            '97. Babi Pangang speciaal (mager vlees in pikante saus) --- € 15,00',
            '97K. Babi Pangang in ketjapsaus --- € 15,50',
            '98. Babi Pangang speciaal (mager vlees in kerriesaus) --- € 15,50',
            '99. Babi Pangang speciaal (mager vlees met champignons in balisaus) --- € 15,50',
            '100. Babi Pangang speciaal (mager vlees met ananas in pikante saus) --- € 15,50',
            '101. Babi Pangang “ À YIK ” (mager vlees, spek en cha siu) --- € 16,50',
            '102. Ajam Pangang (kip in pikante saus) --- € 15,50',
            '104. Koe Loe Yuk (Balletjes varkenshaas in zoetzure saus) --- € 14,50',
            '105. Varkensvlees in kerriesaus --- € 14,50',
            '106. Varkensvlees in tomatensaus --- € 14,50',
            '107. Varkensvlees met champignons --- € 14,50',
            '108. Varkensvlees met paprika --- € 14,50',
            '109. Varkensvlees met taugé --- € 14,50',
            '110. Varkensvlees met bamboe --- € 14,50',
            '111. Varkensvlees met asperges --- € 14,50',
            '112. Babi Ketjap (Varkensvlees met ketjapsaus) --- € 15,00'
          ]},
        { category: 'Kip Gerechten', gerecht: [
            '112A. Ajam Ketjap (kipfilet in ketjapsaus) --- € 15,00',
            '113. ½ kip in pikante saus --- € 14,50',
            '114. ½ kip in kerriesaus --- € 14,50',
            '115. ½ kip met tomaten --- € 14,50',
            '116. ½ kip met champignons --- € 14,50',
            '117. ½ kip in balisaus --- € 14,50',
            '118. Kipblokjes in kerriesaus --- € 14,40',
            '119. Kipblokjes in pikante saus --- € 14,50',
            '120. Kipblokjes met tomaten --- € 14,50',
            '121. Kipblokjes met champignons --- € 14,50',
            '122. Kipblokjes met paprika --- € 14,50',
            '123. Kipblokjes met asperges --- € 14,50',
            '124. Kipblokjes met bamboe --- € 14,50',
            '125. Kipblokjes met ananas in zoetzure saus --- € 14,50',
            '128. Koe Lo Kai (kipballetjes in zoetzure saus) --- € 14,50',
            '129. Kipblokjes met taugé --- € 14,50'
          ]},
        { category: 'Garnalen Gerechten', gerecht: [
            '130. Koe Lo Ha (garnalen in zoetzure saus) --- € 20,50',
            '131. Gebakken Chinese garnalen in pikante saus --- € 20,50',
            '132. Chinese garnalen met champignons --- € 20,00',
            '133. Chinese garnalen in kerriesaus --- € 20,00',
            '134. Chinese garnalen met tomaten --- € 20,00',
            '135. Chinese garnalen met bamboe --- € 20,00',
            '136. Chinese garnalen met asperges --- € 20,00'
          ]},
        { category: 'Rundvlees Gerechten', gerecht: [
            '112B. rundvlees in ketjapsaus --- € 16,50',
            '137. rundvlees in kerriesaus --- € 15,50',
            '138. rundvlees met paprika --- € 15,50',
            '139. rundvlees met champignons --- € 15,50',
            '140. rundvlees met taugé --- € 15,50',
            '141. rundvlees in pikante saus --- € 15,50',
            '142. rundvlees in zoetzure saus met ananas en paprika --- € 15,50'
          ]},
        { category: 'Hollandse Gerechten', gerecht: [
            '143. ½ kip met frites en appelmoes --- € 12,50',
            '146. Kindermenu met ¼ kip, frites en appelmoes --- € 7,50',
            '146a. Kindermenu met saté, frites en appelmoes --- € 7,50',
            '147. Kindermenu met frikandel, frites en appelmoes --- € 7,50'
          ]},
        { category: 'Rijsttafels', gerecht: [
            'R1. RIJSTTAFEL HAPPYWORLD --- € 43,50 (voor 2 personen) (Mini Loempia, Pangsit Goreng, NG Heung Chap Kam Ha, Cha Siu, Tau Sie Kai, Kroepoek en witte rijst)',
            'R2. RIJSTTAFEL HAPPY FAMILY --- € 72,00 (voor 4 personen) (Mini Loempia, Pangsit Goreng, Kung Po Kai, Ng Heung Chap Kam Ha, Sechuan Ngo Yuk, Koe Lo Yuk, Babi Pangang, Kroepoek en witte rijst)',
            'R3. CHINESE RIJSTTAFEL --- € 18,50 (voor 1 persoon) (Kroepoek, Babi Pangang, Koe Lo Yuk, Kipfilet met champignons, Foe Yong Hai en 1 stokje saté en witte rijst)',
            'R4. CHINESE RIJSTTAFEL --- € 36,00 (voor 2 personen) (Kroepoek, Babi Pangang, Foe Yong Hai, Koe Lo Yuk, Tjap Tjoy met kip, gebakken garnalen en 2 stokjes saté en witte rijst)',
            'R5. CHINESE RIJSTTAFEL --- € 77,00 (voor 4 personen) (Kroepoek, Babi Pangang, Cha Siu, Koe Lo Yuk, Foe Yong Hai, Tjap Tjoy met kip, Peking eend met champignons, witte rijst en gebakken garnalen)'
          ]},
        { category: 'Voordeel Menu', gerecht: [
            'Menu A --- € 22,00 (voor 2 personen) (Kerrie Hoekjes en Pangsit Goreng met keuze uit 2 gerechten van het onderstaand menu) (* met 2 maal nasi, bami of witte rijst)',
            'Menu B --- € 31,00 (voor 3 personen) (Kerrie Hoekjes en Pangsit Goreng met keuze uit 3 gerechten van het onderstaand menu) (* met 3 maal nasi, bami of witte rijst)',
            '1. Babi Pangang',
            '2. Foe Yong Hai met kip of varkensvlees',
            '3. Tjap Tjoy met kip of varkensvlees',
            '4. Kip of varkensvlees met kerriesaus',
            '5. Kip of varkensvlees met champignons',
            '6. Koe Loe Kai (kipballetjes in zoetzure saus)',
            '7. Tau Sie Kai (kip met zwarte bonensaus in kruidige sojo saus)',
            '8. Ng Heung Chap Kam Lap (kip met vijf hemelse smaken)',
            '9. Kung Po Kai of Kung Po Yuk ( kip of varkensvlees met kung po saus)'
          ]},
    ];
  
    const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    return (
        <div className="menu-container">
            <h1>Bestel lijst</h1>
            <div className="menu-colum">
            <div id="persoonsmenu">
                    <h3 id="nieuw"> Eén persoonsmenu</h3>
                    <p className="text">
                        Alleen eten hoeft niet saai te zijn!
                        Geniet nu van heerlijke éénpersoonsmenu's van À Yik.
                        Uw menu bestaat uit witte rijst, nasi of bami, een saté en de keuze uit één van onderstaande gerechten:
                    </p>
                    <div className="eennpersoonsmenu">
                            <p className="text">1: Babi Pangang</p>
                           <p className="text">2: Foe Yong Hai</p> 
                           <p className="text"> 3: Koe Lo Kai</p>
                           <p className="text"> 4: Kip Kerrie</p>
                           <p className="text">5: Tjap Tjoy</p>
                           <p className="text">Voor maar € 7,50</p>
                           <p className="text">Waar wacht u nog op, bestel snel!</p>
                    </div>
                </div>
                <div id="groepsmenu">
                    <h3 id="nieuw">NIEUW !</h3>
                    <p className="text">
                        U kunt ook bij ons chaffing dishes lenen, als u boven de 15 personen bestelt. 
                        Het is namelijk veel handiger dan plastic bakken en het staat veel mooier, wanneer u bv.
                        Een feest geeft. Als u bestelt, willen we het voortijdig weten, zodat wij ons erop kunnen voorbereiden.
                    </p>
                    <br />
                    <h4 className="text">Beverwijk - Heemskerk - Velsen Noord
                            (bezorgdienst van 17.00 - 20.00 uur) Maandag en Dinsdag zijn wij gesloten!
                    </h4>
                      <a href="/path/to/menu.pdf" target="_blank" rel="noopener noreferrer">
                        <button type="button">Menu PDF</button>
                      </a>
                  </div>
                </div>
            {menuInfo.map((item, index) => (
            <div key={index} className="menu-item">
                <h3 onClick={() => handleClick(index)} className="menu-question">{item.category}</h3>
                <ul className={`menu-answer ${activeIndex === index ? 'open' : ''}`}>
                {item.gerecht.map((gerecht, gerechtIndex) => (
                    <li key={gerechtIndex}>{gerecht}</li>
                ))}
                </ul>
            </div>
            ))}
        </div>
    );
  };
  
  export default MenuKaart;
