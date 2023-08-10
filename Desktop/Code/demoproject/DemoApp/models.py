from django.db import models

# Create your models here.
class Caps(models.Model):
    complaint = models.IntegerField(null = True, blank = True, default = None)
    complaint_type = models.CharField(max_length=100, null = True, blank = True, default = None)
    complaint_place = models.CharField(max_length=100, null = True, blank = True, default = None)
    informant_type = models.CharField(max_length=100, null = True, blank = True, default = None)    
    def __str__(self) -> str:
        return self.complaint_type