Реализован Square tree шаблон.
Задаются через запятую до восьми целых положительных чисел. Внешний прямоугольник динамически разбивается на прямоуголники, площади которых пропорциональны указанным числам. При изменении размеров окна пропорции сохраняются. Алгоритм разбивки прямоугольника реализован с использованием оригинального рекурсивного компонента.


АЛГОРИТМ ОТРИСОВКИ

 Прогоняем алгоритм для каждого из элементов последовательно и рекурсивно:
————————————
 1. Оцениваем область заполнения и двигаемся вдоль наибольшего измерения слева направо или сверху вниз
 2. Рисуем блок в заданном направлении % от суммы переданных элементов
 3. Оставшееся пространство — новая область заполнения
 4. Исключаем отработанный элемент из передаваемой последовательности
 5. Если элемент последний, то корректируем размеры до полного заполнения, чтобы не было погрешностей округления и выходим из алгоритма.
 6. Скорректированную последовательность и область заполнения передаём на шаг 3.
