import React ,{useState , useEffect , useRef} from 'react'

export default function AllModal({children , setRemove , className1}) {



  let menuRef = useRef();

  useEffect(() => {
    let handeler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setRemove(false);
      }
    };
    document.addEventListener("mousedown", handeler);
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setRemove(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);










  return (
    <div className="modalRemove">
      <div className={`modalRemove-container ${className1}`} ref={menuRef}>
        {children}
        </div>
        </div>
  )
}
