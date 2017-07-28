(function() {
  function updateTimelineItems(event, firstRun) {
    var top = 0;
    var bottom = window.innerHeight;

    [].slice.call(document.querySelectorAll('.fs-timeline-item.n')).forEach(function(element, i) {
      var rect = element.getBoundingClientRect();
      if (rect.bottom >= top && rect.top <= bottom) {
        if (firstRun === true) {
          setTimeout(function() {
            this.classList.add('is-visible');
          }.bind(element), i * 120);
        } else {
          element.classList.add('is-visible');
        }
      } else {
        element.classList.remove('is-visible');
      }
    });
  }
  window.addEventListener('resize', updateTimelineItems);
  window.addEventListener('scroll', updateTimelineItems);
  updateTimelineItems(null, true);
})();
