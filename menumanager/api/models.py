from django.db import models


class Ingredient(models.Model):
    name = models.CharField(max_length=128)
    price = models.FloatField()

    def __str__(self):
        return self.name


class DefaultSandwich(models.Model):
    name = models.CharField(max_length=128)
    ingredient = models.ManyToManyField(Ingredient, related_name='ingredient')

    def __str__(self):
        return self.name


class Promotion(models.Model):
    name = models.CharField(max_length=128)
    desc = models.CharField(max_length=1024)

    def __str__(self):
        return self.name
