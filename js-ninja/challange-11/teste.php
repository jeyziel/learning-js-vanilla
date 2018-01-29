<?php

function test($a, callable $b) {
    return $a + $b(1);
}

$soma = test(1, function($c) {
    return $c;
});

echo $soma;