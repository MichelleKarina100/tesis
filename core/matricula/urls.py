from django.urls import path

from core.matricula.views import *

urlpatterns = [
    # Cursos
    path('scm/verCurso/<int:pk>/', VerCursoListView.as_view(), name='verCurso'),
    path('scm/cursos/', MatriculaListView.as_view(), name='matricula_list'),
    path('scm/order/update/<int:id>/', update_nota, name='update_nota'),
    path('scm/silabo/update/<int:id>/', update_silabo, name='update_silabo'),
    path('scm/updatefile/<int:id>/', update_file_estudent, name='update_file'),
    path('scm/recuperacion/update/<int:id>/', update_recuperacion, name='update_recuperacion'),
    path('scm/silabo/delete/<int:id>/', delete_silabo, name='delete_silabo'),
    path('sale/invoice/pdf/<int:pk>/', SaleInvoicePdfView.as_view(), name='sale_invoice_pdf'),
    path('sale/invoiceList/pdf/<int:pk>/', SaleInvoiceListPdfView.as_view(), name='sale_invoiceList_pdf'),
    path('sale/invoiceNotas/pdf/<int:pk>/', SaleInvoiceNotasPdfView.as_view(), name='sale_invoiceNotas_pdf'),
]
