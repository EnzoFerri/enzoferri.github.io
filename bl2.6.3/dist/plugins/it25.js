import rangeSlider from 'range-slider-input/dist/rangeslider.umd.min.js';
import Timepicker from 'grudus-timepicker/dist/grudus-timepicker.js';

class it25 {
  gooeyRangeSlider(element, options = {}, initialIndex = 0, onChange) {
    if (element == null) {
      return
    }
    const slider = element.querySelector('.slider');
    const blobs = element.querySelector('.blobs');
    const valueText = element.querySelector('.value-text');

    let value = [];

    // initialIndex denotes the index of the thumb over which the blobs have to be placed initially
    const currentIndex = () => {
      // currentValueIndex returns -1 when the thumbs are in idle state
      const index = wrapper.currentValueIndex();
      return index === -1 ? initialIndex : index
    };

    const update = () => {
      const index = currentIndex();
      const fraction = (value[index] - wrapper.min()) / (wrapper.max() - wrapper.min());
      const left = `calc(${fraction * 100}% + ${(0.5 - fraction) * 30}px)`;
      blobs.style.left = left;
      valueText.style.left = left;
      valueText.textContent = value[index];
      if (onChange != null) {
        onChange(value[index]);
      }
    };

    const wrapper = rangeSlider(slider, {
      ...options,
      onInput: (v) => {
        value = v;
        update();
      },
      onThumbDragStart: () => {
        blobs.classList.add('active');
        update();
      },
      onThumbDragEnd: () => {
        blobs.classList.remove('active');
      },
    });

    value = wrapper.value();
    update();
  }

  clockpicker(element) {
    element.addEventListener(
      'click',
      function (event) {
        Timepicker.showPicker({
          time: element.value,
          handColor: '#2a7a38',
          onSubmit: (selected) => {
            element.value = selected.formatted();
            document.getElementById('grudus-clock').parentNode.removeChild(document.getElementById('grudus-clock'));
          },
          onClose: () => {
            document.getElementById('grudus-clock').parentNode.removeChild(document.getElementById('grudus-clock'));
          },
        });
        var clock = document.getElementById('grudus-clock');
        if (clock != null) {
          event.target.after(clock);
        }
      },
      false
    );
  }
}

export { it25 as default };
//# sourceMappingURL=it25.js.map
