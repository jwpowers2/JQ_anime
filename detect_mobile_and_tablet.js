function detect_mobile() {
    if(screen.width <= 1000) {
      location.href = 'index_mobile.html';
    }
}

detect_mobile()