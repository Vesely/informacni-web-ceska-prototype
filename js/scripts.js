[].forEach.call(document.querySelectorAll('.js-collapse-wrapper'), function(wrapper) {
    var trigger = wrapper.querySelector('.js-collapse-trigger');
    var content = wrapper.querySelector('.js-collapse-content');

    trigger.addEventListener('click', function(event) {
        event.preventDefault();

        content.classList.toggle('is-hidden');
    })
});