function $__ie() {
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	var $loader = document.getElementById("loader");
	var $ie = document.getElementById("ie");
	if (isIE) {
		$loader.classList.add("q1");
		$ie.classList.add("q1");
	}
}; $__ie();