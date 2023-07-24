const menu = {
  Flavor: ["strawberry", "banana", "apple", "chocolate", "vanilla"],
  Holder: ["cone", "cup"],
  Size: ["small", "medium", "large"],
  Toppings: ["peanuts", "oreo", "flakes"],
};

let is_shop_open = true;

function time(milliseconds) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, milliseconds);
    } else {
      reject("Shop is closed");
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`Flavor ${menu.Flavor[0]} was selected`);

    await time(1000);
    console.log(`Production has started`);

    await time(2000);
    console.log(`Preparing selected flavor`);

    await time(1000);
    console.log(`Checking for anomalies`);

    await time(2000);
    console.log(`Preparations done, awaiting container choice`);

    await time(1000);
    console.log(
      `Container ${menu.Holder[1]} was selected, awaiting size choice`
    );

    await time(1000);
    console.log(`Size ${menu.Size[1]} was selected, awaiting toppings choice`);

    await time(2000);
    console.log(
      `Toppings ${menu.Toppings[1]} was selected, applying finishing touches`
    );

    await time(3000);
    console.log(`Ice cream is served`);
  } catch (error) {
    console.log("Customer left", error);
  } finally {
    console.log("Day ended, shop is closed");
  }
}

kitchen();
// how await works(check console)
/* let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    resolve(console.log("Which toppings would you like?"));
  }, 3000);
};

async function kitchen() {
  console.log("A");
  console.log("B");
  console.log("C");
  await toppings_choice();
  console.log("D");
  console.log("E");
}

kitchen();

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("orders pending"); */

// Promise chain layout
/* let order = () => {
  return new Promise(() => {
    if (true) {
      resolve();
    } else {
      reject();
    }
  });
};

order().then().then().then().catch().finally(); */

// async example
/* async function order() {
  try {
    await abc;
  } catch (error) {
    console.log("abc does not exist", error);
  } finally {
    console.log("Code runs either way");
  }
}

order(); */

// Promise chain
/* let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
};

order(2000, () => console.log(`Flavor ${menu.Flavor[0]} was selected`))
  .then(() => {
    return order(1000, () => console.log(`Production has started`));
  })

  .then(() => {
    return order(1000, () => console.log(`Selected flavor being prepared`));
  })

  .then(() => {
    return order(2000, () => console.log(`Checking for anomalies`));
  })

  .then(() => {
    return order(3000, () =>
      console.log(`All prepartions done, waiting for container choice`)
    );
  })

  .then(() => {
    return order(1000, () =>
      console.log(
        `Container ${menu.Holder[0]} was selected, waiting for size choice`
      )
    );
  })

  .then(() => {
    return order(3000, () =>
      console.log(`Size ${menu.Size[1]} was selected, adding finishing touches`)
    );
  })

  .then(() => {
    return order(1000, () => console.log(`Ice cream is served`));
  })

  .catch(() => {
    console.log("Shop is closed, unable to serve");
  })

  .finally(() => {
    console.log("Shop is closed, please return tomorrow");
  }); */

// callback chain
/* let order = (Flavor_name, call_production) => {
  setTimeout(() => {
    console.log(`Flavor ${menu.Flavor[Flavor_name]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log(`Production has started`);

    setTimeout(() => {
      console.log(`Selected flavor being prepared`);

      setTimeout(() => {
        console.log(`Checking for anomalies`);

        setTimeout(() => {
          console.log(`All preparations done, waiting for choice of container`);

          setTimeout(() => {
            console.log(
              `Container ${menu.Holder[0]} was selected, waiting for choice of size`
            );

            setTimeout(() => {
              console.log(`Size ${menu.Size[1]} was selected`);

              setTimeout(() => {
                console.log(`Ice cream is served`);
              }, 1000);
            }, 1000);
          }, 2000);
        }, 3000);
      }, 1000);
    }, 2000);
  }, 1000);
};

order(0, production); */
