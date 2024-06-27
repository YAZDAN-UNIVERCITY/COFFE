# models.py
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import EmailValidator
from django.contrib.auth.models import BaseUserManager


# class CustomUserManager(BaseUserManager):
#     def get_by_natural_key(self, username):
#         return self.get(username=username)
#     def create_user(self, email=None, username=None, password=None, **extra_fields):
#         if not email and not username:
#             raise ValueError('ایمیل الزامی است')
        
#         if not password:
#             raise ValueError('وارد کردن رمز الزامی است')
#         email = self.normalize_email(email) if email else None
 
#         user = self.model(
#             email=email,
#             username=username,
#             **extra_fields
#         )
#         user.set_password(password)
#         user.save(using=self._db)
#         return user

#     def create_superuser(self, email=None, username=None, password=None, **extra_fields):
#         extra_fields.setdefault('is_staff', True)
#         extra_fields.setdefault('is_superuser', True)
        
#         return self.create_user(email=email, username=username, password=password, **extra_fields)
    




class CustomUserManager(BaseUserManager):
    def get_by_natural_key(self, username):
        return self.get(username=username)
    def create_user(self, email=None, username=None, password=None, **extra_fields):
        #...
        user = self.model(
            email=email,
            username=username,
            **extra_fields
        )
        user.set_password(password)
        user.is_staff = False
        user.is_superuser = False
        user.save(using=self._db)
        return user

    def create_superuser(self, email=None, username=None, password=None, **extra_fields):
        extra_fields.setdefault('is_active', True)
        user = self.create_user(
            email=email,
            username=username,
            password=password,
            **extra_fields
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user
#python manage.py createsuperuser




class User(AbstractBaseUser, PermissionsMixin):
    """
    Custom user model that inherits from AbstractBaseUser and PermissionsMixin.
    """
    username = models.CharField(_('username'), max_length=150, unique=True)
    email = models.EmailField(_('email address'), unique=True)
    password = models.CharField(_('password'), max_length=128)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']
    objects = CustomUserManager()
    is_staff = models.BooleanField(_('staff status'), default=True)
    is_superuser = models.BooleanField(_('superuser status'), default=True)
    is_active = models.BooleanField(_('active'), default=True)

  