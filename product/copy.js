$('#dd').dialog({
    title: 'My Dialog',
    width: 400,
    height: 200,
    closed: false,
    cache: false,
    href: 'get_content.php',
    modal: true
});
$('#dd').dialog('refresh', 'new_content.php');