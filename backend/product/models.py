from django.db import models

class Product_Category(models.Model):
    name = models.CharField(max_length=255)



class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(upload_to='products/', blank=True)
    category=models.ForeignKey(Product_Category,on_delete=models.PROTECT,null=True,blank=True)
