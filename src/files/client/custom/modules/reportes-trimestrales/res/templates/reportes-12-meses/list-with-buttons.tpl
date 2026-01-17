<div class="page-header">
    <h3>{{headerTitle}}</h3>
</div>

<div class="report-buttons-container">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <i class="fas fa-chart-line"></i> Selecciona un Reporte Anual
                    </h4>
                </div>
                <div class="panel-body">
                    <div class="row">
                        {{#each reportOptions}}
                        <div class="col-md-6 col-lg-4" style="margin-bottom: 15px;">
                            <button class="btn btn-primary btn-block report-button" 
                                    data-report-id="{{id}}" 
                                    data-report-label="{{label}}" 
                                    style="height: 60px; text-align: left;">
                                <i class="{{icon}}" style="margin-right: 10px;"></i>
                                <span>{{label}}</span>
                            </button>
                        </div>
                        {{/each}}
                    </div>
                    
                    <div class="alert alert-info" style="margin-top: 20px;">
                        <i class="fas fa-info-circle"></i>
                        <strong>Información:</strong> Selecciona uno de los reportes de arriba para ver los datos del año.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="report-detail-container" style="display: none;">
    <!-- Aquí se cargará el reporte específico -->
</div>