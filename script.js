const menu = {
  Flavor: ["strawberry", "banana", "apple", "chocolate", "vanilla"],
  Holder: ["cone", "cup"],
  Size: ["small", "medium", "large"],
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open === true) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
};

order(2000, () => console.log(`Flavor ${menu.Flavor[0]} was selected`));

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
