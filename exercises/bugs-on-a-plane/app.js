var form = document.getElementById('arline-form')
var submit = document.getElementById(submit)
var query = document.querySelector
var queryAll = selector => {
  return Array.from(document.querySelectorAll(selector))
}

/*
function formAlert{} {
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = {};
    if (form.elements['vegan'].checked) {
        var diet.pop(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formalert);

*/

window.addEventListener('load', e => {
  const createScrollIndicator = classes => {
    const div = document.createElement('div')
    div.classList.add('scroll-indicator')
    div.classList.add(classes)
    return div
  }

  queryAll('.select-custom').forEach(el => {
    const parent = el
    const input = parent.querySelector('.select-custom-input')
    const optionsUl = parent.querySelector('.select-custom-opts')
    const options = Array.from(
      parent.querySelectorAll('.select-custom-opt'),
    ).reduce(
      (options, li, index, list) => {
        const optionObj = {}
        optionObj[li.dataset.value] = {
          element: li,
          html: li.innerHTML,
          value: li.dataset.value,
        }
        if (index === 0 || li.classList.contains('default')) {
          options.length = list.length
          options.selected = {
            element: li,
            html: li.innerHTML,
            value: li.dataset.value,
          }
        }
        return Object.assign({}, options, optionObj)
      },
      { selected: '' },
    )
    if (options.length > 3) {
      optionsUl.classList.add('more-options')
      options.scrollIndicators = {
        top: createScrollIndicator('top'),
        btm: createScrollIndicator('btm'),
      }

      optionsUl.prepend(options.scrollIndicators.top)
      optionsUl.prepend(options.scrollIndicators.btm)
      options.scrollIndicators.top.style.top = '-100px'
      options.scrollIndicators.btm.style.top = '-100px'

      options.scrollToTop = () => {
        optionsUl.scrollTop = 0
        options.scrollIndicators.top.style.visibility = 'hidden'
        options.scrollIndicators.btm.style.visibility = 'visible'
      }

      options.isOpen = false

      optionsUl.addEventListener('scroll', e => {
        const siHeight = options.scrollIndicators.top.offsetHeight
        const setTopTo = `${-siHeight + optionsUl.scrollTop}px`
        const setBtmTo = `${optionsUl.scrollTop + optionsUl.offsetHeight}px`
        options.scrollIndicators.top.style.top = setTopTo
        options.scrollIndicators.btm.style.btm = setBtmTo
        const lastChild = optionsUl.children[optionsUl.children.length - 1]
        const childHeight = lastChild.offsetHeight
        const optionCount = options.length
        const bottom = childHeight + lastChild.offsetTop
        const bottomEdge = optionsUl.scrollTop + optionsUl.clientHeight
        debugger

        if (optionsUl.scrollTop < childHeight / 2) {
          options.scrollIndicators.top.style.visibility = 'hidden'
        } else {
          options.scrollIndicators.top.style.visibility = 'visible'
        }
        if (bottomEdge > bottom) {
          optionsUl.scrollTop = bottom - optionsUl.offsetHeight
          options.scrollIndicators.btm.style.display = 'hidden'
        } else {
          options.scrollIndicators.btm.style.display = 'visible'
        }
      })
    }
    el.addEventListener('click', e => {
      if (e.target.tagName === 'LI') {
        options.selected.element.classList.remove('selected')
        options.selected = options[e.target.dataset.value]
        input.innerText = options.selected.html
        options.selected.element.classList.add('selected')
        parent.dataset.selected = options.selected.value
      }

      if (options.isOpen) {
        parent.classList.remove('open')
        options.scrollToTop()
      } else {
        parent.classList.add('open')
      }
      options.isOpen = !options.isOpen
      // If open
      console.log(optionsUl)
      //
    })
  })
})
