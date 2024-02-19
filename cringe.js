const url = new URL(location.href);

if (!url.searchParams.get('via_button')) location.href = 'nope.html';