// src/data/products.js
// Datos iniciales de productos — se pueden gestionar desde el panel admin

import aromaticaFrutas from '../assets/images/aromatica_frutas.jpeg';
import aromaticaHiervas from '../assets/images/aromatica_hiervas.jpg';
import aromaticaPanela from '../assets/images/aromatica_panela.jpeg';
import cafe from '../assets/images/cafe.jpg';
import caldoCostilla from '../assets/images/caldo_costilla.jpeg';
import caldoPescado from '../assets/images/caldo_pescado.jpeg';
import canas from '../assets/images/canas.jpg';
import changua from '../assets/images/changua.jpg';
import chocolate from '../assets/images/chocolate.jpg';
import croissant from '../assets/images/croissant.jpg';
import empanadas from '../assets/images/empanadas.jpg';
import galletaDoble from '../assets/images/galleta_doble.png';
import galletaSencilla from '../assets/images/galleta_sencilla.jpeg';
import granizadoCafe from '../assets/images/granizado_cafe.jpg';
import granizadoMilo from '../assets/images/granizado_milo.jpeg';
import huevosAlgusto from '../assets/images/huevos_algusto.jpg';
import huevosRancheros from '../assets/images/huevos_rancheros.png';
import jugoFresa from '../assets/images/jugo_fresa.jpg';
import jugoFrutosRojos from '../assets/images/jugo_frutosrojos.jpeg';
import jugoGuanabana from '../assets/images/jugo_guanabana.jpg';
import jugoLulo from '../assets/images/jugo_lulo.jpg';
import jugoMango from '../assets/images/jugo_mango.jpeg';
import jugoMaracuya from '../assets/images/jugo_maracuya.jpeg';
import jugoMora from '../assets/images/jugo_mora.jpg';
import jugoNaranja from '../assets/images/jugo_naranja.jpg';
import mantecada from '../assets/images/mantecada.jpeg';
import masatoMaiz from '../assets/images/masato_maiz.jpg';
import miloCaliente from '../assets/images/milo_caliente.jpg';
import miloFrio from '../assets/images/milo_frio.jpeg';
import monona from '../assets/images/monona.jpg';
import palitosQueso from '../assets/images/palitos_queso.jpeg';
import pan from '../assets/images/pan.jpg';
import panBaguette from '../assets/images/pan_baguette.jpeg';
import panGalleta from '../assets/images/pan_galleta.jpg';
import panGrande from '../assets/images/pan_grande.jpg';
import panMani from '../assets/images/pan_mani.jpeg';
import panPera from '../assets/images/pan_pera.jpeg';
import pasabocas from '../assets/images/pasabocas.jpg';
import perico from '../assets/images/perico.jpg';
import roscon from '../assets/images/roscon.jpeg';
import tamales from '../assets/images/tamales.jpg';
import tinto from '../assets/images/tinto.jpg';
import tintoGrande from '../assets/images/tinto_grande.jpg';
import tortaNegros from '../assets/images/torta_negros.jpeg';

export const CATEGORIAS = {
  BEBIDAS_CALIENTES: 'Bebidas Calientes',
  BEBIDAS_FRIAS: 'Bebidas Frías',
  DESAYUNOS: 'Desayunos',
  ADICIONALES: 'Adicionales',
  PANES: 'Panes',
};

export const products = [
  // BEBIDAS CALIENTES
  { id: 'tinto', nombre: 'Tinto', categoria: CATEGORIAS.BEBIDAS_CALIENTES, descripcion: 'Calientito, suave y con sabor a hogar. El compañero perfecto para empezar el día.', imagen: tinto, destacado: true },
  { id: 'tinto_grande', nombre: 'Tinto Grande', categoria: CATEGORIAS.BEBIDAS_CALIENTES, descripcion: 'Doble porción de calorcito y sabor a hogar. El compañero perfecto para estirar el día y disfrutar sin afanes.', imagen: tintoGrande },
  { id: 'cafe', nombre: 'Café', categoria: CATEGORIAS.BEBIDAS_CALIENTES, descripcion: 'El compañero perfecto para despertar tus sentidos y alegrar la mañana.', imagen: cafe },
  { id: 'perico', nombre: 'Perico', categoria: CATEGORIAS.BEBIDAS_CALIENTES, descripcion: 'Esa mezcla suavecita de café con leche que se siente como un abrazo mañanero.', imagen: perico },
  { id: 'chocolate', nombre: 'Chocolate', categoria: CATEGORIAS.BEBIDAS_CALIENTES, descripcion: 'Espumoso, dulce y bien calientito. El rey de las tardes frías y el mejor pretexto para sentarse a conversar.', imagen: chocolate },
  { id: 'milo_caliente', nombre: 'Milo Caliente', categoria: CATEGORIAS.BEBIDAS_CALIENTES, descripcion: 'Ese sabor a infancia que nunca pasa de moda. Bien chocolatoso, ideal para recargar energía y alegrar el día.', imagen: miloCaliente },
  { id: 'aromatica_panela', nombre: 'Aromática de Panela', categoria: CATEGORIAS.BEBIDAS_CALIENTES, descripcion: 'Dulcecita, caliente y con ese toque tradicional de limón que te reinicia la vida.', imagen: aromaticaPanela },
  { id: 'aromatica_hiervas', nombre: 'Aromática de Hierbas', categoria: CATEGORIAS.BEBIDAS_CALIENTES, descripcion: 'Un respiro calientito de pura naturaleza. Perfecta para calmar el cuerpo y el alma.', imagen: aromaticaHiervas },
  { id: 'aromatica_frutas', nombre: 'Aromática de Frutas', categoria: CATEGORIAS.BEBIDAS_CALIENTES, descripcion: 'Frutal, dulce y llena de color. Un abrazo tibio y frutal para consentirte a cualquier hora.', imagen: aromaticaFrutas },

  // BEBIDAS FRÍAS
  { id: 'jugo_mora', nombre: 'Jugo de Mora', categoria: CATEGORIAS.BEBIDAS_FRIAS, descripcion: 'Dulce, un poquito ácido y con ese sabor tradicional que a todos nos encanta.', imagen: jugoMora },
  { id: 'jugo_fresa', nombre: 'Jugo de Fresa', categoria: CATEGORIAS.BEBIDAS_FRIAS, descripcion: 'Pura frescura dulce y colorida. El antojo perfecto para refrescar tu día.', imagen: jugoFresa },
  { id: 'jugo_maracuya', nombre: 'Jugo de Maracuyá', categoria: CATEGORIAS.BEBIDAS_FRIAS, descripcion: 'Una explosión ácida y refrescante que te despierta el cuerpo al instante.', imagen: jugoMaracuya },
  { id: 'jugo_lulo', nombre: 'Jugo de Lulo', categoria: CATEGORIAS.BEBIDAS_FRIAS, descripcion: 'Bien frío, espumoso y con ese toque criollo que quita la sed de un sorbo.', imagen: jugoLulo },
  { id: 'jugo_guanabana', nombre: 'Jugo de Guanábana', categoria: CATEGORIAS.BEBIDAS_FRIAS, descripcion: 'Cremoso, dulce y tan refrescante que se siente como un premio.', imagen: jugoGuanabana, destacado: true },
  { id: 'jugo_mango', nombre: 'Jugo de Mango', categoria: CATEGORIAS.BEBIDAS_FRIAS, descripcion: 'Espesito, dulce y con todo el sabor del verano en un solo vaso.', imagen: jugoMango },
  { id: 'jugo_naranja', nombre: 'Jugo de Naranja', categoria: CATEGORIAS.BEBIDAS_FRIAS, descripcion: 'Recién exprimido, acidito y lleno de la energía mañanera que necesitas.', imagen: jugoNaranja },
  { id: 'jugo_frutosrojos', nombre: 'Jugo de Frutos Rojos', categoria: CATEGORIAS.BEBIDAS_FRIAS, descripcion: 'Una combinación dulce y vibrante hecha para consentir el paladar.', imagen: jugoFrutosRojos },
  { id: 'milo_frio', nombre: 'Milo Frío', categoria: CATEGORIAS.BEBIDAS_FRIAS, descripcion: 'El clásico de siempre, pero bien helado. Bien chocolatoso y perfecto para refrescar la tarde.', imagen: miloFrio },
  { id: 'granizado_cafe', nombre: 'Granizado de Café', categoria: CATEGORIAS.BEBIDAS_FRIAS, descripcion: 'Pura energía helada. El sabor de nuestro café en un texturizado bien frío que te despierta al instante.', imagen: granizadoCafe },
  { id: 'granizado_milo', nombre: 'Granizado de Milo', categoria: CATEGORIAS.BEBIDAS_FRIAS, descripcion: 'Ese sabor a infancia hecho granizo. Dulce, refrescante y con un toque crocante arriba.', imagen: granizadoMilo },
  { id: 'masato', nombre: 'Masato', categoria: CATEGORIAS.BEBIDAS_FRIAS, descripcion: 'Espesito, frío y con ese toque tradicional de la casa que sabe a pura herencia y celebración.', imagen: masatoMaiz },

  // DESAYUNOS
  { id: 'caldo_costilla', nombre: 'Caldo de Costilla', categoria: CATEGORIAS.DESAYUNOS, descripcion: 'El levantamuertos por excelencia. Con carne suavecita, papa perfecta y ese cilantro fresco que te devuelve el alma.', imagen: caldoCostilla, destacado: true },
  { id: 'caldo_pescado', nombre: 'Caldo de Pescado', categoria: CATEGORIAS.DESAYUNOS, descripcion: 'Ligerito, calientito y con todo el sabor del mar para activar el cuerpo desde temprano.', imagen: caldoPescado },
  { id: 'huevos_algusto', nombre: 'Huevos al Gusto', categoria: CATEGORIAS.DESAYUNOS, descripcion: 'Hechos en el momento, justo como te encantan. El clásico infaltable de tus mañanas.', imagen: huevosAlgusto },
  { id: 'huevos_rancheros', nombre: 'Huevos Rancheros', categoria: CATEGORIAS.DESAYUNOS, descripcion: 'Con su toque de salchicha y queso derretido. Una delicia saladita para empezar con fuerza.', imagen: huevosRancheros },
  { id: 'monona', nombre: 'Moñona', categoria: CATEGORIAS.DESAYUNOS, descripcion: 'La combinación perfecta de todo lo rico en un solo plato. Para los que desayunan sin timidez.', imagen: monona },
  { id: 'changua', nombre: 'Changua', categoria: CATEGORIAS.DESAYUNOS, descripcion: 'El desayuno bogotano por excelencia. Una caricia calientita de leche, huevo y calado para abrigar las mañanas de la capital.', imagen: changua },
  { id: 'tamales', nombre: 'Tamales', categoria: CATEGORIAS.DESAYUNOS, descripcion: 'Un tesoro envuelto en hoja. Con ese sazón casero y secreto que reúne a la familia en la mesa.', imagen: tamales },

  // ADICIONALES
  { id: 'pasabocas', nombre: 'Pasabocas', categoria: CATEGORIAS.ADICIONALES, descripcion: 'Crocantes capas de hojaldre espolvoreadas con azúcar, rellenas del matrimonio perfecto: bocadillo dulce y queso derretido.', imagen: pasabocas },
  { id: 'empanadas', nombre: 'Empanadas', categoria: CATEGORIAS.ADICIONALES, descripcion: 'Doraditas, crujientes y con ese sazón de mamá que te alegra el día en un solo mordisco.', imagen: empanadas },
  { id: 'croissant', nombre: 'Croissant', categoria: CATEGORIAS.ADICIONALES, descripcion: 'Hojaldrado y crujiente, relleno de queso derretido combinado con jamón, bocadillo o arequipe. ¡Una tentación calientita!', imagen: croissant, destacado: true },
  { id: 'mantecada', nombre: 'Mantecada', categoria: CATEGORIAS.ADICIONALES, descripcion: 'El bizcocho de la casa. Esponjoso, con un toque de sabor tradicional y perfecto para acompañar el tinto de la tarde.', imagen: mantecada },
  { id: 'galleta_sencilla', nombre: 'Galleta Sencilla', categoria: CATEGORIAS.ADICIONALES, descripcion: 'La compañera ideal para acompañar un tinto sin complicaciones.', imagen: galletaSencilla },
  { id: 'galleta_doble', nombre: 'Galleta Doble', categoria: CATEGORIAS.ADICIONALES, descripcion: 'El doble de sabor y cariño. Dos capitas crocantes unidas por un relleno dulce que te alegra el corazón a cualquier hora.', imagen: galletaDoble },
  { id: 'palitos_queso', nombre: 'Palitos de Bocadillo y Queso', categoria: CATEGORIAS.ADICIONALES, descripcion: 'Un clásico de la tarde. Crocantes por fuera, con ese balance saladito y dulce por dentro que tanto nos gusta a los bogotanos.', imagen: palitosQueso },
  { id: 'roscon', nombre: 'Roscones', categoria: CATEGORIAS.ADICIONALES, descripcion: 'Suaves y doraditos, rellenos con el dulce toque del bocadillo o arequipe.', imagen: roscon },
  { id: 'pan_pera', nombre: 'Pan Pera', categoria: CATEGORIAS.ADICIONALES, descripcion: 'Suave, tierno y con su tradicional forma, decorado con un toque de azúcar y ese colorcito tan único que te alegra el día desde el primer vistazo.', imagen: panPera },
  { id: 'torta', nombre: 'Tortas', categoria: CATEGORIAS.ADICIONALES, descripcion: 'Sabor casero tradicional que nos encanta, decorada con crema blanca y chispitas de colores para endulzar tus tardes.', imagen: tortaNegros },
  { id: 'canas', nombre: 'Cañas', categoria: CATEGORIAS.ADICIONALES, descripcion: 'El clásico rollito suave con su tradicional espiral dulce y rojo, coronado con una costra azucarada que te transporta a las tardes de la infancia.', imagen: canas },

  // PANES
  { id: 'pan', nombre: 'Pan Pequeño', categoria: CATEGORIAS.PANES, descripcion: 'El infaltable de la mesa. Suavecito, calientito y perfecto para acompañar cualquier momento del día en familia.', imagen: pan },
  { id: 'pan_grande', nombre: 'Pan Grande de Queso', categoria: CATEGORIAS.PANES, descripcion: 'Generoso, suave y con un corazón cargado de queso derretido que se estira en cada mordisco. Perfecto para compartir en familia.', imagen: panGrande },
  { id: 'pan_galleta', nombre: 'Pan Galleta', categoria: CATEGORIAS.PANES, descripcion: 'Esa textura tostadita que tanto te gusta, pero con una sorpresa deliciosa: ¡un relleno suave y dulce de puro arequipe!', imagen: panGalleta, destacado: true },
  { id: 'pan_mani', nombre: 'Pan de Maní', categoria: CATEGORIAS.PANES, descripcion: 'El balance ideal entre la masa casera, el toque crocante del maní y un tierno corazón de arequipe que te va a encantar.', imagen: panMani },
  { id: 'pan_baguette', nombre: 'Pan Baguette', categoria: CATEGORIAS.PANES, descripcion: 'Largo, bien doradito y crujiente por fuera, pero deliciosamente suave por dentro. El pan fresco ideal para acompañar tus comidas.', imagen: panBaguette },
];

export const getProductosByCategoria = (categoria) =>
  products.filter((p) => p.categoria === categoria);

export const getDestacados = () =>
  products.filter((p) => p.destacado);
