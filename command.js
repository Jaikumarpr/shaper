/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
const buildShapeArgs = () => {
  // eslint-disable-next-line no-undef
  const props = ['x', 'y', 'r'];
  const args = [1, 2, 3];

  const argObj = {};

  Object.defineProperty(argObj, 'prop', {
    value: 3,
    enumerable: true,
  });

  // for (let i = 0; i < 3; i++) {
  //   Object.defineProperty(argObj, props[i], {
  //     value: args[i],
  //     writable: true,
  //   });
  // }

  console.log(argObj);
};

buildShapeArgs();
