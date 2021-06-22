import React from "react";
import styles from '../styles/card.module.css'

export default function Card({ date, title, detail }) {
  return (
    <>
      <div className={styles['card']}>
        <p className={styles['date']}>11/11/2020</p>
        <h2>Torta húmeda de chocolate decorada</h2>
        <div className={styles['detail']} >
          3 tazas de harina (420 gramos)
          <br /> 3 tazas de azúcar (600 gramos)
          <br /> 2½ cucharaditas de bicarbonato
          <br /> 1 cucharadita de polvos de hornear o levadura tipo Royal
          <br /> 1 pizca de sal
          <br /> 1 pizca de canela en polvo
          <br /> 1½ tazas de cocoa o cacao en polvo
          <br /> 1½ tazas de aceite
          <br /> 2 tazas de leche (480 mililitros)
          <br /> 2 cucharaditas de vinagre blanco
          <br /> 2 cucharaditas de esencia de vainilla
          <br /> 4 unidades de huevos
          <br />
          Para hacer esta torta húmeda de chocolate decorada, coge un recipiente
          grande y tamiza la harina junto con la cocoa, el bicarbonato y el
          polvo de hornear. Añade dos tazas de azúcar, la sal y la canela y
          mezcla bien.
          <br />
          <br />
          Truco: Para que salga una torta de chocolate húmeda bien esponjosa es
          mejor tamizar todos los ingredientes secos.
          <br />
          Separa las claras de las yemas de huevo. Introduce a la mezcla
          anterior el aceite y la leche y mezcla bien. Luego, para seguir con la
          preparación de la torta de chocolate húmeda y esponjosa, añade el
          vinagre y sigue batiendo.
          <br />
          Agrega ahora las yemas de huevo y la esencia de vainilla y continúa
          mezclando. Aparte, bate las claras a punto de nieve con el azúcar
          restante e incorpóralas a la mezcla con la ayuda de una espátula,
          haciendo movimientos envolventes suaves.
          <br />
          <br />
          Truco: Las claras a punto de nieve aportarán aún más aire a esta torta
          mojada de chocolate.
          <br />
          Vierte la masa del bizcocho húmedo de chocolate en un molde para horno
          previamente enharinado y enmantecado y lo hornea a 180 ºC (con el
          horno previamente precalentado) durante 50 minutos.
          <br />
          <br />
          Para comprobar que la torta de chocolate casera está lista, pínchala
          con un palillo de madera y si sale limpio es que ya está bien hecha.
          En caso contrario, te recomendamos que revises este artículo nuestro
          para saber por qué te ha quedado crudo el bizcocho.
          <br />
          Retira la torta de chocolate húmeda del horno, déjala enfriar sobre
          una rejilla a temperatura ambiente y después la desmoldas. Si quieres,
          puedes cortar el bizcocho de chocolate húmedo por la mitad y
          rellenarlo con frosting de chocolate (o de otro sabor que quieras).
          Después cubre la tarta con una ganache casera y ya puedes disfrutar
          con toda la familia y amigos de esta torta húmeda de chocolate
          decorada.
          <br />
          <br />
          Para obtener una torta de chocolate más húmeda y esponjosa aún, mezcla
          al baño María una taza de crema de leche con chocolate de cobertura,
          cocoa y azúcar al gusto, pincha varias zonas del pastel de chocolate
          húmedo con ayuda de unas jeringuillas pasteleras (o similar) y lo
          cúbrelo también con esta mezcla en lugar de la ganache. ¡Te va a
          encantar!
        </div>
      </div>
    </>
  );
}
