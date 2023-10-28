from django.db import models

# Create your models here.

class TicketModel(models.Model):
    keyword = models.CharField(max_length=50)
    distance = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    location = models.CharField(max_length=50)

    def __str__(self):
        return self.keyword
