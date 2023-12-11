function toggleSwitch(iconId) {
    var icon = document.getElementById(iconId);
    if (icon.classList.contains('bi-toggle-on')) {
        icon.classList.remove('bi-toggle-on', 'text-success');
        icon.classList.add('bi-toggle-off', 'text-danger');
    } else {
        icon.classList.remove('bi-toggle-off', 'text-danger');
        icon.classList.add('bi-toggle-on', 'text-success');
    }
}
