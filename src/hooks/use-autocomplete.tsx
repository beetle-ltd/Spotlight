import { IProduct } from "@/models/Products";
import { useState, useRef } from "react";

const KEY_CODES = {
  DOWN: 40,
  UP: 38,
  PAGE_DOWN: 34,
  ESCAPE: 27,
  PAGE_UP: 33,
  ENTER: 13,
};
export function useAutoComplete({ delay = 500, source, onChange }) {
  const [myTimeout, setMyTimeOut] = useState(setTimeout(() => {}, 0));
  const listRef = useRef<HTMLDataListElement>();
  const [suggestions, setSuggestions] = useState<IProduct[]>([]);
  const [isBusy, setBusy] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [textValue, setTextValue] = useState("");

  function delayInvoke(callback: () => void) {
    if (myTimeout) {
      clearTimeout(myTimeout);
    }
    setMyTimeOut(setTimeout(callback, delay));
  }

  function selectOption(index: number) {
    if (index > -1) {
      onChange(suggestions[index]);
      setTextValue(suggestions[index].name);
    }
    clearSuggestions();
  }

  async function getSuggestions(searchTerm: string) {
    if (searchTerm && source) {
      const options = await source(searchTerm);
      setSuggestions(options);
    }
  }

  function clearSuggestions() {
    setSuggestions([]);
    setSelectedIndex(-1);
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
    if (selectedIndex < suggestions.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
    if (!listRef.current) return;
    listRef.current.scrollTop = selectedIndex * optionHeight;
  }

  function pageDown() {
    setSelectedIndex(suggestions.length - 1);

    if (!listRef.current) return;
    listRef.current.scrollTop = suggestions.length * optionHeight;
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
        let nodes = Array.from(listRef?.current.children);
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
  };
}
