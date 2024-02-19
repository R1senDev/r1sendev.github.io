const url = new URL(location.href);

if (url.searchParams.get('cheater')) document.getElementById('cheaterplace').innerHTML = ', <span class="cheater">dirty cheater!</span>'