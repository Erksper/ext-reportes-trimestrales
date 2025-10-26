define('reportes-trimestrales:views/reportes-9-meses/list-with-buttons', ['view'], function (Dep) {
    
    return Dep.extend({
        
        template: 'reportes-trimestrales:reportes-9-meses/list-with-buttons',
        
        setup: function () {
            this.headerTitle = 'Reportes 9 Meses';

            this.reportOptions = [
                {id: 'TerritorioNacional3t', label: 'Territorio Nacional', icon: 'fas fa-map-marker'},
                {id: 'CLACaracasLibertador3t', label: 'CLA Caracas Libertador', icon: 'fas fa-map-marker'},
                {id: 'CLACaracasNoreste3t', label: 'CLA Caracas Noreste', icon: 'fas fa-map-marker'},
                {id: 'CLACaracasSureste3t', label: 'CLA Caracas Sureste', icon: 'fas fa-map-marker'},
                {id: 'CLACentroOccidente3t', label: 'CLA Centro Occidente', icon: 'fas fa-map-marker'},
                {id: 'CLALlanoAndes3t', label: 'CLA Llanos Andes', icon: 'fas fa-map-marker'},
                {id: 'CLAOrienteInsular3t', label: 'CLA Oriente Insular', icon: 'fas fa-map-marker'},
                {id: 'CLAOrienteNorte3t', label: 'CLA Oriente Norte', icon: 'fas fa-map-marker'},
                {id: 'CLAOrienteSur3t', label: 'CLA Oriente Sur', icon: 'fas fa-map-marker'},
                {id: 'CLAZulia3t', label: 'CLA Zulia', icon: 'fas fa-map-marker'}
            ];
        },
        
        data: function () {
            return {
                reportOptions: this.reportOptions,
                headerTitle: this.headerTitle
            };
        },
        
        events: {
            'click .report-button': 'onReportClick',
            'click .back-to-reports': 'backToReports'
        },
        
        onReportClick: function (e) {
            var reportId = $(e.currentTarget).data('report-id');
            var reportLabel = $(e.currentTarget).data('report-label');
            
            console.log('Clicked report:', reportId, reportLabel);
            
            this.showReportView(reportId, reportLabel);
        },
        
        showReportView: function(reportId, reportLabel) {
            console.log('Loading report:', reportId);
            
            var reportPath = 'client/custom/modules/reportes-trimestrales/res/reports/reportes-9-meses/' + reportId + '.html';
            
            var iframeHtml = '<div class="report-header">' +
                '<button class="btn btn-default back-to-reports" style="margin-bottom: 15px;">' +
                '<i class="fas fa-arrow-left"></i> Volver a la lista de reportes' +
                '</button>' +
                '<h3>' + reportLabel + '</h3>' +
                '</div>' +
                '<iframe src="' + reportPath + '" ' +
                'style="width: 100%; height: 600px; border: 1px solid #ddd; border-radius: 4px;"' +
                'frameborder="0">' +
                '</iframe>';
            
            this.$el.find('.report-detail-container').html(iframeHtml);
            this.$el.find('.report-buttons-container').hide();
            this.$el.find('.report-detail-container').show();
        },
        
        backToReports: function() {
            this.$el.find('.report-detail-container').hide();
            this.$el.find('.report-buttons-container').show();
        }
    });
});
