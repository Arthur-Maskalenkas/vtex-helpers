# Como fazer estilização de loading | loading facebook

https://codepen.io/munjewar/pen/eQZaGL



.myPointsLoadingContainer .elementLoading {
  position: relative;
  border-radius: 10px;

  height: 130px;
  background: rgba(157, 34, 53, 1);
  background: -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(157, 34, 53, 1)), color-stop(18%, rgba(157, 34, 53, 0.9)), color-stop(33%, rgba(157, 34, 53, 1)));
  background: linear-gradient(to right, rgba(157, 34, 53, 1) 8%, rgba(157, 34, 53, 0.9) 18%, rgba(157, 34, 53, 1) 33%);
  background-size: 800px 100px;
  animation: wave-squares 2s infinite ease-out;
}


@keyframes wave-lines {
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
}

@keyframes wave-squares {
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
}