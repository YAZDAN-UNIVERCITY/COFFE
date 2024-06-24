from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(upload_to='products/', blank=True)
how fix "remote: Permission to YAZDAN-UNIVERCITY/COFFE.git denied to Pouya-Azizzadh.
fatal: unable to access 'https://github.com/YAZDAN-UNIVERCITY/COFFE.git/': The requested URL returned error: 403

remote: Permission to YAZDAN-UNIVERCITY/COFFE.git denied to Pouya-Azizzadh.
fatal: unable to access 'https://github.com/YAZDAN-UNIVERCITY/COFFE.git/': The requested URL returned error: 403

" error in git hub