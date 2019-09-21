const orders = (time, product, table) => {
  console.log(`### Orden: ${product} para ${table}`);
  return new Promise((resolve, reject) => {
    // Se puede mejorar especificando de que tipo es el error
    if (time && product && table) {
      setTimeout(() => {
        resolve(`=== Pedido servido: ${product}, tiempo de preparación ${time}ms para la ${table}`);
      }, time);
    } else {
      reject('Se encontro un error');
    }
  });
}
const menu = {
  hamburger: 'Combo Hamburguesa',
  hotdog: 'Combo Hot Dogs',
  pizza: 'Combo Pizza',
};

const table = ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4', 'Mesa 5'];

const waiter = () => {
  orders(numAleatorio(8000, 1000), menu.hamburger, table[3])
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
};

const numAleatorio = (numMax, numMin) => Math.floor(Math.random() * (numMax - numMin) + numMin);

const waiter2 = () => {
  orders(numAleatorio(10000, 1000), menu.hotdog, table[0])
    .then((res) => {
      console.log(res)
      return orders(numAleatorio(20000, 5000), menu.pizza, table[2])
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

const waiter3 = async function () {
  let entregarOrden1 = await orders(numAleatorio(9000, 1000), menu.hotdog, table[1])
  let entregarOrden2 = await orders(numAleatorio(12000, 1000), menu.pizza, table[1])
  let entregarOrden3 = await orders(numAleatorio(5000, 1000), menu.hamburger, table[1])
  console.log(entregarOrden1)
  console.log(entregarOrden2)
  console.log(entregarOrden3)
}

// waiter();
// waiter2();
waiter3();