const setMeisterPointNaming = () => {
  document.querySelectorAll(".fas.fa-sad-cry").forEach((item) => {
    item?.parentElement?.parentElement?.parentElement?.parentElement?.classList.add(
      "bad",
    );
  });
};

export default setMeisterPointNaming;
