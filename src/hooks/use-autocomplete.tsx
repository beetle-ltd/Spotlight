import { IProduct } from "@/models/Products";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const KEY_CODES = {
  DOWN: 40,
  UP: 38,
  PAGE_DOWN: 34,
  ESCAPE: 27,
  PAGE_UP: 33,
  ENTER: 13,
};


type TSuggestions = {
  stores:{
    name: string;
    username: string;
    logo: string;
  }[];
  products: IProduct[];
}
export function useAutoComplete({ delay = 500, source, onChange }) {
  const [myTimeout, setMyTimeOut] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [suggestions, setSuggestions] = useState<TSuggestions>({stores:[], products:[]});
  const [isBusy, setBusy] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [textValue, setTextValue] = useState("");

  const navigate = useNavigate();

  function delayInvoke(callback: () => void) {
    if (myTimeout) {
      clearTimeout(myTimeout);
    }
    setMyTimeOut(setTimeout(callback, delay));
  }

  function selectOption(index: number) {
    if (index > -1) {
      onChange(suggestions.products[index] || suggestions?.stores[index]);
      if(suggestions.products.length > 0)  {
        setTextValue(suggestions.products[index].name)
        navigate(`/explore/${suggestions.products[index].id}`)
      }
      setTextValue(suggestions.stores[index].name)
      navigate(`/${suggestions.stores[index].username}`)
    clearSuggestions();
    }
  }

  async function getSuggestions(searchTerm: string) {
    if (searchTerm && source) {
      setBusy(true);
      const {stores,products} = await source(searchTerm);
      setSuggestions( {stores, products});
      setBusy(false);
    }
  }

  function clearSuggestions() {
    delayInvoke(() => {
      setSuggestions({stores:[], products:[]})
      setSelectedIndex(-1);
    });
  }

  function onTextChange(searchTerm: string) {
    setBusy(true);
    setTextValue(searchTerm);
    clearSuggestions();
    delayInvoke(() => {
      getSuggestions(searchTerm);
      setBusy(false);
    });
  }

  // research what this code does
  const optionHeight = listRef?.current?.children[0]?.clientHeight;

  function scrollUp() {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
    if (!listRef.current) return;
    listRef.current.scrollTop -= optionHeight;
  }

  function scrollDown() {
    if (selectedIndex < suggestions.stores.length + suggestions.products.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
    if (!listRef.current) return;
    listRef.current.scrollTop = selectedIndex * optionHeight;
  }

  function pageDown() {
    setSelectedIndex(suggestions.stores.length + suggestions.products.length - 1);

    if (!listRef.current) return;
    listRef.current.scrollTop = (suggestions.stores.length + suggestions.products.length-1) * optionHeight;
  }

  function pageUp() {
    setSelectedIndex(0);
    if (!listRef.current) return;
    listRef.current.scrollTop = 0;
  }

  function onKeyDown(e) {
    const keyOperation = {
      [KEY_CODES.DOWN]: scrollDown,
      [KEY_CODES.UP]: scrollUp,
      [KEY_CODES.ENTER]: () => selectOption(selectedIndex),
      [KEY_CODES.ESCAPE]: clearSuggestions,
      [KEY_CODES.PAGE_DOWN]: pageDown,
      [KEY_CODES.PAGE_UP]: pageUp,
    };
    if (keyOperation[e.keyCode]) {
      keyOperation[e.keyCode]();
    } else {
      setSelectedIndex(-1);
    }
  }

  return {
    bindOption: {
      onClick: (e) => {
        const nodes = Array.from(listRef?.current.children);
        selectOption(nodes.indexOf(e.target.closest("li")));
      },
    },
    bindInput: {
      value: textValue,
      onChange: (e) => onTextChange(e.target.value),
      onKeyDown,
    },
    bindOptions: {
      ref: listRef,
    },
    isBusy,
    suggestions,
    selectedIndex,
    textValue,
  };
}
