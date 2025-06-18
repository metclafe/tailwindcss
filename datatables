function initializeDataTable(tableId, customOptions = {}) {
    const defaultOptions = {
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.7/i18n/pt-BR.json'
        },
        pageLength: 10,
        ordering: true,
        info: true,
        searching: true,
        paging: true,
        lengthChange: false,
        dom: 'rt',
        order: [[0, 'desc']],
        drawCallback: function(settings) {
            var api = this.api();
            var pageInfo = api.page.info();
            var anterior = $('.pagination-prev');
            var proximo = $('.pagination-next');
            var pagina = $('.pagination-current');
            
            anterior.prop('disabled', !pageInfo.page);
            proximo.prop('disabled', pageInfo.page >= pageInfo.pages - 1);
            pagina.text(pageInfo.page + 1);
        }
    };

    const finalOptions = { ...defaultOptions, ...customOptions };
    const table = $(`#${tableId}`).DataTable(finalOptions);
    
    $('.pagination-prev').on('click', function() {
        if (!$(this).prop('disabled')) {
            table.page('previous').draw('page');
        }
    });

    $('.pagination-next').on('click', function() {
        if (!$(this).prop('disabled')) {
            table.page('next').draw('page');
        }
    });

    $('#search-input').on('keyup', function() {
        table.search(this.value).draw();
    });

    return table;
} 
