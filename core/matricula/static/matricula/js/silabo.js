var fvSilabo;
var input_creada_en;


document.addEventListener('DOMContentLoaded', function (event) {
    const form = document.getElementById('frmSilabo');
    fvSilabo = FormValidation.formValidation(form, {
            locale: 'es_ES',
            localization: FormValidation.locales.es_ES,
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
                bootstrap: new FormValidation.plugins.Bootstrap(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
            },

            fields: {
               
                actividad: {
                    validators: {
                        notEmpty: {
                            message: 'Llenar este campo..'
                        },
                    }
                },
                descripcion: {
                    validators: {
                        notEmpty: {
                            message: 'Llenar este campo..'
                        },
                    }
                },
                url: {
                    validators: {
                        notEmpty: {
                            message: 'Llenar este campo..'
                        },
                    }
                },
                quimestre: {
                    validators: {
                        notEmpty: {
                            message: 'Llenar este campo..'
                        },
                    }
                },
                producto : {
                    validators: {
                        notEmpty: {
                            message: 'Llenar este campo..'
                        },
                        remote: {
                            url: pathname,
                            // Send { username: 'its value', email: 'its value' } to the back-end
                            data: function () {
                                return {
                                    obj: form.querySelector('[name="quimestre"]').value,
                                    obj2: form.querySelector('[name="eva"]').value,
                                    type: 'producto',
                                    action: 'validate_data'
                                };
                            },
                            message: 'La evaluación para este quimestre ya esta creada.',
                            method: 'POST',
                            headers: {
                                'X-CSRFToken': csrftoken
                            },
                        }
                    },
                },

            }
            
        }
    )
        .on('core.element.validated', function (e) {
            if (e.valid) {
                const groupEle = FormValidation.utils.closest(e.element, '.form-group');
                if (groupEle) {
                    FormValidation.utils.classSet(groupEle, {
                        'has-success': false,
                    });
                }
                FormValidation.utils.classSet(e.element, {
                    'is-valid': false,
                });
            }
            const iconPlugin = fvSilabo.getPlugin('icon');
            const iconElement = iconPlugin && iconPlugin.icons.has(e.element) ? iconPlugin.icons.get(e.element) : null;
            iconElement && (iconElement.style.display = 'none');
        })
        .on('core.validator.validated', function (e) {
            if (!e.result.valid) {
                const messages = [].slice.call(form.querySelectorAll('[data-field="' + e.field + '"][data-validator]'));
                messages.forEach((messageEle) => {
                    const validator = messageEle.getAttribute('data-validator');
                    messageEle.style.display = validator === e.validator ? 'block' : 'none';
                });
            }
        })
        .on('core.form.valid', function () {
            var parameters = new FormData(fvSilabo.form);
            parameters.append('action', 'add_silabo');
            let urlrefresh = fvSilabo.form.getAttribute('data-url');
            submit_formdata_with_ajax('Notificación',
                '¿Estas seguro de realizar la siguiente acción?',
                pathname,
                parameters,
                function (request) {
                    
                    location.href = urlrefresh;

                },
            );
        });
});


$(function () {

    $('.select2').select2({
        placeholder: 'Buscar..',
        language: 'es',
        theme: 'bootstrap4'
    });

    input_creada_en = $('input[name="creada_en"]');
    date_current = new moment().format("YYYY-MM-DD HH:mm:ss");

    input_creada_en.datetimepicker({
        useCurrent: false,
        format: 'YYYY-MM-DD HH:mm:ss',
        locale: 'es',
        keepOpen: false,
    });

    input_creada_en.datetimepicker('date', input_creada_en.val());
    input_creada_en.datetimepicker('minDate',date_current);



});