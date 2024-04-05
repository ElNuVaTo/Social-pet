import React from "react";
import styled from "styled-components";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import ShopIcons from "../../../assets/icons/shopping-cart.svg";
import BagIcons from "../../../assets/icons/shopping-bag.svg";
import ProductoCarrito from "../../../components/cards/ProductoCarrito";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  gap: 10px;
  &.Imagen {
    height: 150px;
    width: 150px;
    object-fit: cover;
    user-select: none;
  }

  &.Desc {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Shop = () => {
  const GlobalShop = [
    {
      id: 1,
      name: "Producto 1",
      description: "Descripción del producto 1",
      brand: "Marca 1",
      price: 10.99,
      image: "https://via.placeholder.com/150",
      quantity: 1,
    },
    {
      id: 2,
      name: "Producto 2",
      description: "Descripción del producto 2",
      brand: "Marca 2",
      price: 20.99,
      image: "https://via.placeholder.com/150",
      quantity: 1,
    },
  ];
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="fixed bottom-6 left-0 flex items-center justify-center bg-green-500 border-transparent rounded-e-full">
          <div className=" cursor-pointer  rounded-full py-3 px-3">
            <img
              src={ShopIcons}
              alt="Carrito de compras"
              className="relative right-1"
            />
          </div>

          <div className="absolute left-12 py-0.5 px-3 bg-green-400 rounded-md select-none cursor-pointer">
            <p className=" text-black">1</p>
          </div>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <p>Carrito de compras</p>
            </AlertDialogTitle>
            <AlertDialogDescription>
              {GlobalShop > 0 ? (
                <Container>
                  <span className="Imagen">
                    <img
                      src={BagIcons}
                      alt="Bolsa de compra"
                      draggable={false}
                    />
                  </span>

                  <div className="Desc">
                    <p className="text-black">¡Empiza un carrito de compras</p>
                    <p>Suma productos y consigue el envio gratis</p>
                  </div>
                </Container>
              ) : (
                <Container>
                  {GlobalShop.map((item, index) => (
                    <React.Fragment key={index}>
                      <ProductoCarrito
                        name={item.name}
                        description={item.description}
                        brand={item.brand}
                        id={item.id}
                        img={item.img}
                        price={item.price}
                        quantity={item.quantity}
                      />
                    </React.Fragment>
                  ))}
                </Container>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-black hover:bg-green-400">
              Seguir comprando
            </AlertDialogCancel>
            <AlertDialogAction className="bg-green-300 text-black hover:bg-green-400">
              Comprar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="fixed bottom-6 right-6 flex items-center justify-center"></div>
    </>
  );
};
export default Shop;
