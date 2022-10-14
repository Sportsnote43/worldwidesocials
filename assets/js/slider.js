setInterval(() => {
    let $curr = document.querySelector('#slider1 input[type=radio]:checked'),
            $next = $curr.nextSibling;
        
    if (!$next.length) {
        $next = document.querySelector('#slider1 input[type=radio]').firstChild;
    }
    $next.setAttribute('checked', true);
}, 3000);