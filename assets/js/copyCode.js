document.querySelectorAll(".copy-code-button").forEach(e => {
    let r = e.closest("figure.code-block")
      , n = r?.querySelector("code")
      , i = r?.querySelector('[role="alert"]');
    !r || !n || e.addEventListener("click", () => {
        window.navigator.clipboard.writeText(n.innerText);
        let t = e.innerHTML;
        e.classList.add("copied"),
        e.innerText = "Copied",
        i && (i.innerText = "Copied"),
        setTimeout( () => {
            e.classList.remove("copied"),
            e.innerHTML = t,
            i && (i.innerText = "")
        }
        , 2e3)
    }
    )
}
);
