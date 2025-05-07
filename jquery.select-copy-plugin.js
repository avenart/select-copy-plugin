/*!
 * select-copy-button jQuery Plugin
 * Displays a floating "Copy" button next to selected text (mobile-friendly)
 */
;(function ($) {
  $.fn.selectCopyButton = function (options) {
    const settings = $.extend(
      {
        buttonText: 'Copy',
        copiedText: 'Copied!',
        buttonClass: 'scb-button',
        onSelect: null,
      },
      options
    )

    // Create and style the copy button
    const $copyBtn = $('<button>')
      .addClass(settings.buttonClass)
      .attr('id', 'scb-copy-btn')
      .text(settings.buttonText)
      .hide()
      .appendTo('body')

    const showCopyButton = function (e) {
      const selection = window.getSelection()
      const text = selection.toString().trim()

      if (!text.length) {
        $copyBtn.hide()
        return
      }

      // Trigger the onSelect callback if provided
      if (typeof settings.onSelect === 'function') {
        settings.onSelect(text)
      }

      const range = selection.getRangeAt(0)
      const rect = range.getBoundingClientRect()

      $copyBtn
        .css({
          top: window.scrollY + rect.bottom + 10 + 'px',
          left: window.scrollX + rect.left + 'px',
          display: 'block',
        })
        .data('text', text)
    }

    const hideCopyButton = function (e) {
      if (!$(e.target).is($copyBtn)) {
        $copyBtn.hide()
      }
    }

    const handleCopy = function () {
      const text = $copyBtn.data('text')
      navigator.clipboard
        .writeText(text)
        .then(() => {
          $copyBtn.text(settings.copiedText)
          setTimeout(() => {
            $copyBtn.text(settings.buttonText).hide()
            window.getSelection().removeAllRanges()
          }, 1000)
        })
        .catch((err) => {
          alert('Failed to copy: ' + err)
        })
    }

    return this.each(function () {
      const $el = $(this)
      $el.on('mouseup touchend', showCopyButton)
      $(document).on('mousedown touchstart', hideCopyButton)
      $copyBtn.on('click touchstart', function (e) {
        e.preventDefault()
        e.stopPropagation()
        handleCopy()
      })
    })
  }
})(jQuery)
