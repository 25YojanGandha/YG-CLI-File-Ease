function helpWrapper() {
    console.log(` 
List of commands ::
       FE view <dir_path> tree        to see tree view
       FE view <dir_path> flat        to see falt view 
       FE organise <dir_path>         to organise folder
       FE utility notepad             to open notepad
       FE utility calculator          to open calculator
       FE utility browser             to open browser 
       FE help                        for help
    `);
}

module.exports = {
    help: helpWrapper
}