define('reportes-trimestrales:views/reportes-latam/direct-view', ['view'], function (Dep) {
    
    return Dep.extend({
        
        template: 'reportes-trimestrales:reportes-latam/direct-view',
        
        setup: function () {
            this.headerTitle = 'Reporte LATAM';
            // Ruta directa al archivo HTML
            this.reportPath = 'client/custom/modules/reportes-trimestrales/res/reports/reporte-latam/reporte-latam.html';
        },
        
        data: function () {
            return {
                headerTitle: this.headerTitle,
                reportPath: this.reportPath
            };
        }
    });
});