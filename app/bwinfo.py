import os
import json

from categorias.ciencias.script import CSettings
from categorias.entretenimiento.script import ESettings
from categorias.finanzas.script import FSettings
from categorias.tecnologia.script import TSettings
from categorias.salud.script import SSettings

#os.system('clear')
ruta_base = os.path.dirname(os.path.abspath(__file__))

archivos = ['data.json', '000001.jpg']
rutas = [
    os.path.join(ruta_base, 'categorias', 'ciencias'),
    os.path.join(ruta_base, 'categorias', 'entretenimiento'),
    os.path.join(ruta_base, 'categorias', 'finanzas'),
    os.path.join(ruta_base, 'categorias', 'tecnologia'),
    os.path.join(ruta_base, 'categorias', 'salud')
]

""" [Loop de categoría; Ciencia] """
for cate1 in rutas[0:1]:
    cfg = CSettings.buscar_carpetas(cate1, archivos)

    with open(os.path.join(cate1, 'info.json'), "w", encoding='utf-8') as file:
        json.dump(cfg, file, ensure_ascii=False)
    print("[Barlow; Fichero 'info.json' de Ciencias creado].")


""" [Loop de categoría; Entretenimiento] """
for cate2 in rutas[1:2]:
    cfg = ESettings.buscar_carpetas(cate2, archivos)

    with open(os.path.join(cate2, 'info.json'), "w", encoding='utf-8') as file:
        json.dump(cfg, file, ensure_ascii=False)
    print("[Barlow; Fichero 'info.json' de Entretenimiento creado].")


""" [Loop de categoría; Finanzas] """
for cate3 in rutas[2:3]:
    cfg = FSettings.buscar_carpetas(cate3, archivos)

    with open(os.path.join(cate3, 'info.json'), "w", encoding='utf-8') as file:
        json.dump(cfg, file, ensure_ascii=False)
    print("[Barlow; Fichero 'info.json' de Finanzas creado].")


""" [Loop de categoría; Tecnología] """
for cate4 in rutas[3:4]:
    cfg = TSettings.buscar_carpetas(cate4, archivos)

    with open(os.path.join(cate4, 'info.json'), "w", encoding='utf-8') as file:
        json.dump(cfg, file, ensure_ascii=False)
    print("[Barlow; Fichero 'info.json' de Tecnología creado].")


""" [Loop de categoría; Salud] """
for cate5 in rutas[4:5]:
    cfg = SSettings.buscar_carpetas(cate5, archivos)

    with open(os.path.join(cate5, 'info.json'), "w", encoding='utf-8') as file:
        json.dump(cfg, file, ensure_ascii=False)
    print("[Barlow; Fichero 'info.json' de Salud creado].")
