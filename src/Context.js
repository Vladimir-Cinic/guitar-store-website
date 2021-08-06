import React, { useState, useContext, useEffect, useReducer } from 'react';
import { data } from './data';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // STARTING DATA
  const [productsData, setProductsData] = useState(data);
  const removeFilters = () => {
    setProductsData(data);
  };
  // STARTING DATA

  // MENU TOGGLE
  const [toggleDropDownMenu, setToggleDropDownMenu] = useState(false);
  const [toggleSubmenu, setToggleSubmenu] = useState(false);

  const closeDropdown = () => {
    setToggleDropDownMenu(false);
    setToggleSubmenu(false);
  };
  // MENU TOGGLE

  // CART LOGIC
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    const selectedItem = cartItems.find((item) => item.id === product.id);
    if (selectedItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...selectedItem,
                itemQuantity: selectedItem.itemQuantity + quantity,
              }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, itemQuantity: quantity }]);
    }
    setQuantity(1);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 1500);
  };

  const incrementQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    setCartItems(
      cartItems.map((i) =>
        i.id === item.id ? { ...item, itemQuantity: item.itemQuantity + 1 } : i
      )
    );
  };

  const decrementQuantity = (id) => {
    const clickedItem = cartItems.find((item) => item.id === id);

    setCartItems(
      cartItems
        .map((cartItem) => {
          if (cartItem.id === clickedItem.id) {
            return { ...cartItem, itemQuantity: cartItem.itemQuantity - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.itemQuantity !== 0)
    );
  };

  const deleteItem = (id) => {
    const clickedItem = cartItems.find((item) => item.id === id);
    setCartItems(cartItems.filter((item) => item.id !== clickedItem.id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.itemQuantity,
    0
  );

  const [showNotification, setShowNotification] = useState(false);
  // CART LOGIC

  // SEARCH LOGIC
  const [searchTerm, setSearchTerm] = useState('');
  const searchProducts = (searchTerm) => {
    const filteredArray = data.filter((product) => {
      return product.model.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (searchTerm == '') {
      setProductsData(data);
    } else {
      setProductsData(filteredArray);
    }
  };
  useEffect(() => {
    searchProducts(searchTerm);
  }, [searchTerm]);
  // SEARCH LOGIC

  // FILTERING LOGIC
  const allBrands = [
    'All Products',
    ...new Set(data.map((item) => item.brand)),
  ];
  const selectBrand = (brand) => {
    if (brand === 'All Products') {
      setProductsData(data);
    } else {
      const filteredArray = data.filter((item) => item.brand === brand);
      setProductsData(filteredArray);
    }

    closeDropdown();
  };

  const sortByPrice = (arg) => {
    setProductsData((prevData) => [
      ...data.sort((a, b) => {
        if (arg === 'lower') {
          return a.price - b.price;
        } else if (arg === 'higher') {
          return b.price - a.price;
        }
      }),
    ]);
    closeDropdown();
  };

  const [similarProducts, setSimilarProducts] = useState('');
  // FILTERING LOGIC

  // MODAL LOGIC
  const reducer = (state, action) => {
    if (action.type === 'OPENED') {
      return {
        isModalOpen: true,
        modalContent: `${action.payload}`,
      };
    }
    if (action.type === 'CLOSED') {
      return {
        isModalOpen: false,
        modalContent: '',
      };
    }
    return state;
  };
  const defaultState = {
    isModalopen: false,
    modalContent: '',
  };
  const [state, dispatch] = useReducer(reducer, defaultState);

  const openModal = (id) => {
    const [clickedItem] = productsData.filter((item) => item.id === id);
    console.log(clickedItem.images[0]);
    dispatch({ type: 'OPENED', payload: clickedItem.images[0] });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSED' });
  };
  // MODAL LOGIC

  return (
    <AppContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        handleCartClick,
        productsData,
        setSearchTerm,
        allBrands,
        sortByPrice,
        selectBrand,
        toggleDropDownMenu,
        setToggleDropDownMenu,
        toggleSubmenu,
        setToggleSubmenu,
        setProductsData,
        data,
        removeFilters,
        state,
        dispatch,
        openModal,
        closeModal,
        quantity,
        setQuantity,
        addToCart,
        cartItems,
        incrementQuantity,
        decrementQuantity,
        deleteItem,
        clearCart,
        cartTotal,
        similarProducts,
        setSimilarProducts,
        showNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
